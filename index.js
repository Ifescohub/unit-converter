
//Each item's measure
const meter = 3.281; //feet;
const liter = 0.264; //gallon
const kilogram = 2.204; //pound

//Storing DOM elements
const input = document.querySelector("input");
const btn = document.querySelector("button");

const feets = document.getElementById("feet");
const meters = document.getElementById("meters");
const liters = document.getElementById("liters");
const gallons = document.getElementById("gallons");
const pounds = document.getElementById("pounds");
const kilos = document.getElementById("kilos");

let units = document.querySelectorAll(".units");


let modeSwitch = document.getElementById("mode-switch");
const body = document.querySelector("body");
const main = document.querySelectorAll("main > *");


 

//Formatting button click to perform convert function
btn.addEventListener("click", ()=>{
    converter(feets, meters, meter);
    converter(gallons, liters, liter);
    converter(pounds, kilos, kilogram);
});


//Function to convert every item
function converter (item1, item2, cal){
    
    let inputValue = input.value; 
    
    units.forEach((unit) => unit.innerHTML = inputValue);

    item1.innerHTML = (cal * inputValue).toFixed(3);
    item2.innerHTML = ((1/cal) * inputValue).toFixed(3);
}


//To switch between the dark and light mode
modeSwitch.addEventListener("click", ()=>{
    body.classList.toggle("dark-mode");
    modeSwitch.classList.toggle("dark-mode");
    main.forEach((div) => div.classList.toggle("dark-mode"))
   
})