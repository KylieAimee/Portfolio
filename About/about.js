const fyear = document.getElementById("footeryear");
const d = new Date();
fyear.textContent = "(c) Kylie Farrell " + d.getFullYear();

//need to fix
const greeting = document.getElementById("Greetingheader")
    if (d.getHours() <= 11) {
        console.log('Good Morning!');
    } else if (d.getHours() < 18 ) {
        console.log('Good Afternoon!');
    } else if (d.getHours() < 22 ) {
        console.log('Good Afternoon!')
    }
