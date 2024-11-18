//footer date
const fyear = document.getElementById("footeryear");
const d = new Date();
fyear.textContent = "(c) Kylie Farrell " + d.getFullYear();

//alert button
function showAlert() {
    alert("Message me about my art or to get to know me more!");
}

//hover button
function mouseOver() {
    document.getElementById("btn-alert").style.color = "white";
  }
  
  function mouseOut() {
    document.getElementById("btn-alert").style.color = "black";
  }