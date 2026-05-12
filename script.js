var massivetxt=[
"Добро пожаловать!",
"Нажимай на кнопку, чтобы начать добычу",
"Прокачка даёт эффективную добычу ресурсов",
];
var randomsov=Math.floor(Math.random() * 3);
alert(massivetxt[randomsov]);
var upgraderr=document.getElementById("OpenUp");
var back=document.getElementById("close");
var h1Id = document.getElementById("h1");
var settings=document.getElementById("settings");
var backsettings = document.getElementById("backsettings");
var buttonId = document.getElementById("button");
var upgrade10=document.getElementById('upgrade1');
var upgrade20=document.getElementById('upgrade2');
var upgrade30=document.getElementById('upgrade3');
var upgrade40=document.getElementById('upgrade4');
var upgrade50=document.getElementById('upgrade5');
var shopClick = document.getElementById("shopClick");
var shopClickPerMinute = document.getElementById("shopClickPerMinute");
var backShop = document.getElementById("backShop");
var autoUpgrade = document.getElementById("autoUpgrade");
var backShopMenu = document.getElementById("backShopMenu");
var backMain = document.getElementById("backMain");
let autoClickPower = parseInt(sessionStorage.getItem("autoClickPower")) || 0;
let autoclickInterval = null;
let particlesEnabled = true;
var totalStats = document.getElementById("totalStats");
var autoStats = document.getElementById("autoStats");
var powerStats = document.getElementById("powerStats");
let autoClicks = parseInt(sessionStorage.getItem("autoClicks")) || 0;
let autoPrice = parseInt(sessionStorage.getItem("autoPrice")) || 100;
let clickPerMinuteVariable=document.getElementById("clicksminute");
var counter = parseInt(sessionStorage.getItem("counter")) || 0;
alert("сохраняйте прогресс, иначе он пропадёт при закрытии страницы!");
alert("разработчик: Skittles124");
if (sessionStorage.getItem("counter")) {
    counter = parseInt(sessionStorage.getItem("counter"));
    h1Id.textContent = "Всего кликов: " + counter;
}
 else {
    counter = 0;
}
function clicksPerMinute() {
    counter++;
    h1Id.textContent = "Всего кликов: " + counter;
    sessionStorage.setItem("counter", counter);
    sessionStorage.setItem("upgrade0", upgrade0);
}
setInterval(clicksPerMinute, 60000);
var upgrade0 = parseInt(sessionStorage.getItem("upgrade0")) || 1;
document.addEventListener('keydown', function(event) {
    if (event.keyCode === 13 ) {
        buttonId.blur();
    }
});
upgraderr.addEventListener('click', function(){
    upgraderr.classList.add('hidden');
    settings.classList.add('hidden');
    shopClick.classList.remove('hidden');
    shopClickPerMinute.classList.remove('hidden');
    backShopMenu.classList.remove('hidden');
});
backShopMenu.addEventListener('click', function(){
    hideAllShopUI();
    upgraderr.classList.remove('hidden');
    settings.classList.remove('hidden');
});
    back.addEventListener('click',function(){
	upgraderr.classList.remove('hidden');
	back.classList.add('hidden');
	upgrade10.classList.add('hidden');
    upgrade20.classList.add('hidden');
    upgrade30.classList.add('hidden');
    upgrade40.classList.add('hidden');
    upgrade50.classList.add('hidden');
    settings.classList.remove('hidden');
    });
   shopClickPerMinute.addEventListener('click', function(){
    shopClick.classList.add('hidden');
    shopClickPerMinute.classList.add('hidden');
    backMain.classList.remove('hidden');
    autoUpgrade.classList.remove('hidden');
});
autoUpgrade.addEventListener('click', function(){
    if(counter < autoPrice){
        alert("Нужно больше кликов!");
        return;
    }
    counter -= autoPrice;
    autoClicks++;
    autoPrice = Math.floor(autoPrice * 1.5);
    autoUpgrade.textContent =
    "Купить авто-клик (" + autoPrice + ")";
    h1Id.textContent = "Всего кликов: " + counter;
    sessionStorage.setItem("autoClicks", autoClicks);
    sessionStorage.setItem("autoPrice", autoPrice);
});
setInterval(function(){
    counter += autoClicks;
    h1Id.textContent = "Всего кликов: " + counter;

    sessionStorage.setItem("counter", counter);
}, 1000);
upgrade10.addEventListener('click', function(){
     if(10>counter){
        alert("Недостаточно кликов для покупки улучшения");
        return;
    }
    counter=counter-10;
    upgrade0 = upgrade0+1 ;
    h1Id.textContent = "Всего кликов: " + counter;
});
upgrade20.addEventListener('click', function(){
    if(20>counter){
        alert("Недостаточно кликов для покупки улучшения");
        return;
    }
    counter=counter-20;
    upgrade0 = upgrade0+2 ;
    h1Id.textContent = "Всего кликов: " + counter;
});
upgrade30.addEventListener('click', function(){
    if(30>counter){
        alert("Недостаточно кликов для покупки улучшения");
        return;
    }
    counter=counter-30;
    upgrade0 = upgrade0+3 ;
    h1Id.textContent = "Всего кликов: " + counter;
});
upgrade40.addEventListener('click', function(){
    if(40>counter){
        alert("Недостаточно кликов для покупки улучшения");
        return;
    }
    counter=counter-40;
    upgrade0 = upgrade0+4 ;
    h1Id.textContent = "Всего кликов: " + counter;
});
upgrade50.addEventListener('click', function(){
    if(50>counter){
        alert("Недостаточно кликов для покупки улучшения");
        return;
    }
    counter=counter-50;
    upgrade0 = upgrade0+5 ;
    h1Id.textContent = "Всего кликов: " + counter;
});
backShop.addEventListener('click', function(){
    backShop.classList.add('hidden');
    shopClick.classList.add('hidden');
    shopClickPerMinute.classList.add('hidden');
    upgraderr.classList.remove('hidden');
    settings.classList.remove('hidden');
    upgrade10.classList.add('hidden');
    upgrade20.classList.add('hidden');
    upgrade30.classList.add('hidden');
    upgrade40.classList.add('hidden');
    upgrade50.classList.add('hidden');
});
shopClick.addEventListener('click', function(){
    shopClick.classList.add('hidden');
    shopClickPerMinute.classList.add('hidden');
    backMain.classList.remove('hidden');
    upgrade10.classList.remove('hidden');
    upgrade20.classList.remove('hidden');
    upgrade30.classList.remove('hidden');
    upgrade40.classList.remove('hidden');
    upgrade50.classList.remove('hidden');
});
console.log("Всё работает):", buttonId);
buttonId.addEventListener("click", function(){
    counter=counter+upgrade0;
    h1Id.textContent = "Всего кликов: " + counter; 
    sessionStorage.setItem("counter", counter);
    sessionStorage.setItem("upgrade0", upgrade0);
    console.log("кликов нажато:", counter);
});
settings.addEventListener('click',function(){
	upgraderr.classList.add('hidden');
	backsettings.classList.remove('hidden');
    settings.classList.add('hidden');
    document.getElementById("resetProgress").classList.remove("hidden");
    });
backsettings.addEventListener('click',function(){ 
    backsettings.classList.add('hidden');
    upgraderr.classList.remove('hidden');   
    settings.classList.remove('hidden');
    document.getElementById("resetProgress").classList.add("hidden");
    });
    document.getElementById("resetProgress").addEventListener("click", function(){
    sessionStorage.clear();
    location.reload();
});
document.addEventListener('DOMContentLoaded', function() {
    const winButton = document.getElementById('winButton');
    const winScreen = document.getElementById('winScreen');
    const WIN_COST = 10000;
    if (!winButton || !winScreen) {
        console.error("winButton или winScreen не найден в HTML!");
        return;
    }
    function checkWin() {
        if (counter >= WIN_COST) {
            winButton.style.display = "block";
        }
    }
    winButton.addEventListener('click', function() {
        if (counter >= WIN_COST) {
            counter -= WIN_COST;
            h1Id.textContent = "Всего кликов: " + counter;
            winScreen.style.display = "flex";
        }
    });
    setInterval(checkWin, 600);
    checkWin();
});
console.log("=== ЗАПУСК ОТЛАДКИ ПОБЕДЫ ===");
setTimeout(() => {
    const winButton = document.getElementById('winButton');
    const winScreen = document.getElementById('winScreen');
    console.log("winButton найден:", !!winButton);
    console.log("winScreen найден:", !!winScreen);
    if (winButton) {
        winButton.style.display = "block";
        console.log("Кнопка принудительно показана");
        winButton.onclick = function() {
            counter -= 10000;
            h1Id.textContent = "Всего кликов: " + counter;
            document.getElementById('winScreen').style.display = "flex";
        };
    } else {
        console.error("❌ winButton НЕ НАЙДЕН в DOM!");
    }
}, 1000);
let canClick = true;

buttonId.addEventListener("click", function(){
    const rect = buttonId.getBoundingClientRect();

createClickParticles(
    rect.left + rect.width / 2,
    rect.top + rect.height / 2
);
    showFloatText(
    Math.random() * window.innerWidth,
    Math.random() * window.innerHeight * 0.6,
    "+" + upgrade0);
    if (!canClick) return;
    canClick = false;
    counter += upgrade0;
    updateUI();
    sessionStorage.setItem("counter", counter);
    buttonId.disabled = true;
    buttonId.textContent = "Ожидание...";
    buttonId.classList.add("cooldown");
    setTimeout(function(){
        buttonId.disabled = false;
        buttonId.textContent = "Жми!";
        canClick = true;
        buttonId.classList.remove("cooldown");
    }, 300);

});
document.getElementById("helpBtn").onclick = function () {
    window.open("guide.html", "_blank");
};
function hideAllShopUI(){
    shopClick.classList.add('hidden');
    shopClickPerMinute.classList.add('hidden');
    backShopMenu.classList.add('hidden');
    backMain.classList.add('hidden');
    upgrade10.classList.add('hidden');
    upgrade20.classList.add('hidden');
    upgrade30.classList.add('hidden');
    upgrade40.classList.add('hidden');
    upgrade50.classList.add('hidden');
    autoUpgrade.classList.add('hidden');

}
function showFloatText(x, y, text) {
    const el = document.createElement("div");
    el.className = "floatText";
    el.textContent = text;

    el.style.left = x + "px";
    el.style.top = y + "px";

    document.getElementById("floatTextContainer").appendChild(el);

    setTimeout(() => el.remove(), 800);
}
function createClickParticles(x, y) {
    const container = document.getElementById("clickParticles");

    for (let i = 0; i < 6; i++) {

        const p = document.createElement("div");
        p.className = "particleClick";

        p.style.left = x + "px";
        p.style.top = y + "px";

        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 60 + 20;

        p.style.setProperty("--dx", Math.cos(angle) * distance + "px");
        p.style.setProperty("--dy", Math.sin(angle) * distance + "px");

        container.appendChild(p);

        setTimeout(() => p.remove(), 600);
    }
}
function updateUI() {
    h1Id.textContent = "Всего кликов: " + counter;

    totalStats.textContent = counter;
    autoStats.textContent = autoClicks;
    powerStats.textContent = upgrade0;
}
