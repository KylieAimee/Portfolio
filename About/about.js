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
