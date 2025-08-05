function calculatebmi(){
    let weightInput = prompt(" what Is Your Weight ?");
    let heightInput =  prompt("what Is Your Height ?");
let weight = parseFloat(weightInput);
let heightCm = parseFloat(heightInput);

let height = heightCm/100;
let bmi=weight/(height*height);

document.getElementById("result").innerHTML =` Your BMI is: ${bmi.toFixed(2)}`;
}