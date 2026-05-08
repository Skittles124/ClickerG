var h1Id = document.getElementById("h1");
var buttonId = document.getElementById("button");
var counter = 0;
console.log("Script loaded, button:", buttonId);
buttonId.addEventListener("click", function(){
    counter++;
    h1Id.textContent = "Всего кликов: " + counter;
    console.log("Clicked, counter:", counter);
});