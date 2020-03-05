let dropdown = document.getElementById('ametid');
dropdown.length = 0;

let defaultOption = document.createElement('option');
defaultOption.text = 'Vali amet';

dropdown.add(defaultOption);
dropdown.selectedIndex = 0;

const url = "https://api.npoint.io/11ad378dfd80eb6ffcb4";

const request = new XMLHttpRequest();
request.open('GET', url, true);

request.onload = function() {
  if (request.status === 200) {
    var data = JSON.parse(request.responseText);
    let option;
    for (let i = 0; i < data.length; i++) {
      option = document.createElement('option');
      option.text = data[i].amet;
      option.value = data[i].tunnipalk;
      dropdown.add(option);
    }
   } else {
    // Reached the server, but it returned an error
  }   
}

request.onerror = function() {
  console.error('An error occurred fetching the JSON from ' + url);
};

request.send();

const amet = document.querySelector("#ametid");
const tunnid = document.querySelector("#tunnid");
const btnamps =document.querySelector("#amps");
const answer =document.querySelector("#answer");
const balance = document.querySelector("balance");
let balance_val=0;
var checkBox = document.getElementById("öötöö");


function amps() {
  if (checkBox.checked ==true){
    ampsuraha=amet.value*parseInt(tunnid.value)*1.5;
    balance_val+=ampsuraha;
    answer.innerText=balance_val;
    let newRow=document.createElement("div");
    newRow.classList.add("print-in");
    newRow.innerHTML =amet.value+ ampsuraha.value;
    document.querySelector(".print-boxs").appendChild(newRow);}
    else {
      ampsuraha=amet.value*parseInt(tunnid.value);
      balance_val+=ampsuraha;
      answer.innerText=balance_val;
      let newRow=document.createElement("div");
      newRow.classList.add("print-in");
      newRow.innerHTML =amet.value + ampsuraha.value;
      document.querySelector(".print-boxs").appendChild(newRow);

    }
}
// function multiplier(){
//     var checkBox = document.getElementById("öötöö");
//     if (checkBox.checked=="True"){
//         ampsuraha=ampsuraha*1.5;
//     }
// }
btnamps.addEventListener("click", amps)
