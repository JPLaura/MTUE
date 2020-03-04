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
const btnamps =document.querySelector("#amps")
const answer =document.querySelector("#answer")

function amps() {
    ampsuraha=amet.value*parseInt(tunnid.value)
    answer.innerText=ampsuraha
    let newRow=document.createElement("div")
    newRow.classList.add("print-in");
    newRow.innerHTML =ampsuraha.value;
    document.querySelector(".print-boxs").appendChild(newRow);
}
// function multiplier(){
//     var checkBox = document.getElementById("öötöö");
//     if (checkBox.checked=="True"){
//         ampsuraha=ampsuraha*1.5;
//     }
// }
btnamps.addEventListener("click", amps)
