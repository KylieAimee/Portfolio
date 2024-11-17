//footer date
const fyear = document.getElementById("footeryear");
const d = new Date();
fyear.textContent = "(c) Kylie Farrell " + d.getFullYear();

//Greeting
document.getElementById("greeting");
const hour = new Date().getHours();
const welcomeTypes = 
["Good morning! I'm Kylie", "Good afternoon! I'm Kylie", "Good evening! I'm Kylie"];

let welcomeText = "";

if (hour < 12) welcomeText = welcomeTypes[0];
else if (hour < 18) welcomeText = welcomeTypes[1];
else welcomeText = welcomeTypes[2];

greeting.innerHTML = welcomeText;



//loops
let initialElement = 1;
let stopValue = 12;

const orderedList = document.getElementById("numbers")

for (let i = initialElement; i <= stopValue; i ++) {
    const listItem = document.createElement("li");

    if (i % 2 == 0) {
        listItem.textContent = "Even";
    } else if (i % 2 == 1) {
        listItem.textContent = "Odd";
    }

    orderedList.appendChild(listItem);
}