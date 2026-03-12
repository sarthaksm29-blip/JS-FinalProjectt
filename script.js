// ===============================
// BMI CALCULATION FUNCTION
// ===============================

function calculateBMI(){

let height = parseFloat(document.getElementById("height").value);
let weight = parseFloat(document.getElementById("weight").value);

if(!height || !weight){
alert("Please enter both height and weight");
return;
}

let heightMeters = height / 100;

let bmi = weight / (heightMeters * heightMeters);

bmi = bmi.toFixed(1);

let status = "";

if(bmi < 18.5){
status = "Underweight";
}
else if(bmi < 25){
status = "Normal";
}
else if(bmi < 30){
status = "Overweight";
}
else{
status = "Obese";
}

document.getElementById("bmiResult").innerHTML =
"BMI: " + bmi + " (" + status + ")";

}


// ===============================
// SAVE HEALTH RECORD
// ===============================

function saveRecord(){

let date = document.getElementById("date").value;
let height = parseFloat(document.getElementById("height").value);
let weight = parseFloat(document.getElementById("weight").value);
let sys = parseFloat(document.getElementById("sys").value);
let dia = parseFloat(document.getElementById("dia").value);
let sugar = parseFloat(document.getElementById("sugar").value);

if(!date || !height || !weight || !sys || !dia || !sugar){
alert("Please fill all fields before saving.");
return;
}

let bmi = weight / ((height/100)*(height/100));
bmi = bmi.toFixed(1);

let record = {
date,height,weight,sys,dia,sugar,bmi
};

let records = JSON.parse(localStorage.getItem("healthRecords")) || [];

records.push(record);

localStorage.setItem("healthRecords", JSON.stringify(records));

displayRecords();

}


// ===============================
// DISPLAY TABLE RECORDS
// ===============================

function displayRecords(){

let records = JSON.parse(localStorage.getItem("healthRecords")) || [];

let table = "";

records.forEach(r => {

let bpStyle = "";
let sugarStyle = "";

if(r.sys > 140 || r.dia > 90){
bpStyle = "style='color:red;font-weight:bold'";
}

if(r.sugar > 140){
sugarStyle = "style='color:red;font-weight:bold'";
}

table += `
<tr>
<td>${r.date}</td>
<td>${r.height}</td>
<td>${r.weight}</td>
<td ${bpStyle}>${r.sys}/${r.dia}</td>
<td ${sugarStyle}>${r.sugar}</td>
<td>${r.bmi}</td>
</tr>
`;

});

let tableBody = document.getElementById("recordsTable");

if(tableBody){
tableBody.innerHTML = table;
}

}

window.onload = displayRecords;


// ===============================
// DOCTOR APPOINTMENT BOOKING
// ===============================

function bookAppointment(button, doctor){

alert("Appointment booked successfully with " + doctor + "!");

button.innerText = "Booked";
button.disabled = true;

}


// ===============================
// PLAN SUBSCRIPTION
// ===============================

function subscribePlan(button, plan){

alert("You have successfully subscribed to the " + plan + " plan!");

button.innerText = "Subscribed";
button.disabled = true;

}