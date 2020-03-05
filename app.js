// const url = "https://api.npoint.io/11ad378dfd80eb6ffcb4";

// const request = new XMLHttpRequest();
// request.open('GET', url, true);

// request.onload = function() {
//   if (request.status === 200) {
//     var data = JSON.parse(request.responseText);
//     let option;
//     for (let i = 0; i < data.length; i++) {
//       option = document.createElement('option');
//       option.text = data[i].amet;
//       option.value = data[i].tunnipalk;
//       dropdown.add(option);
//     }
//    } else {
//     // Reached the server, but it returned an error
//   }   
// }

// request.onerror = function() {
//   console.error('An error occurred fetching the JSON from ' + url);
// };

// request.send();
// 
// 
var sel = document.getElementById("ametid");
var text= sel.options[sel.selectedIndex].text;
var amet = document.querySelector("#ametid");
const tunnid = document.querySelector("#tunnid");
const btnamps =document.querySelector("#amps");
const answer =document.querySelector("#answer");
const balance = document.querySelector("balance");
let balance_val=0;
var checkBox = document.getElementById("öötöö");
let dropdown = document.getElementById('ametid');
let defaultOption = document.createElement('option');
defaultOption.text = 'Vali amet';

dropdown.add(defaultOption);
dropdown.selectedIndex = 0;
dropdown.length = 0;

let occupations = {
  96: { name: "Prügimees", rate: 0},
  94: { name: "Kelner", rate: 0},
  91: { name: "Koristaja", rate: 0},
  83: { name: "Autojuht", rate: 0},
  74: { name: "Elektrik", rate: 0},
  71: { name: "Ehitaja", rate: 0},
  22: { name: "Arst", rate: 0},
  25: { name: "Tehnik", rate: 0},
  43: { name: "Raamatupidaja", rate: 0},
  52: { name: "Müüja", rate: 0},
  73: { name: "Õmbleja", rate: 0},
  92: { name: "Aednik", rate: 0},
  42: { name: "Klienditeenindaja", rate: 0}
}

fetch('http://andmebaas.stat.ee/sdmx-json/data/PA627/7+10+18+19+22+28+30+31+35+36+37+39+41.3.1/all?startTime=2014&endTime=2014&dimensionAtObservation=allDimensions')
.then(response=>{
  return response.json()
})

.then(data => {
  data.structure.dimensions.observation[0].values.forEach((el, i) => {
    objectKey = el.name.split(' ')[0]
    // console.log(objectKey)
    key = i + ":0:0:0"
    // console.log(key)
    rate = data.dataSets[0].observations[key][0]
    occupations[objectKey].rate = rate;
    console.log(occupations[objectKey].name)
  })

    const request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.onload = function() {
    if (request.status === 200) {
      var data = JSON.parse(request.responseText);
      let option;
      for (let i = 0; i < data.length; i++) {
        option = document.createElement('option');
        option.text = data[i].name;
        option.value = data[i].rate;
        dropdown.add(option);
      }
     } else {
        Reached the server, but it returned an error
    }   
  }

    request.onerror = function() {
    console.error('An error occurred fetching the JSON from ' + url);
  };

    request.send();
    btnamps.addEventListener("click", amps)

  // console.log(occupations[22].rate)
})



// function amps() {
//   if (checkBox.checked ==true){
//     ampsuraha=amet.value*parseInt(tunnid.value)*1.5;
//     balance_val+=ampsuraha;
//     answer.innerText=balance_val;
//     let newRow=document.createElement("div");
//     newRow.classList.add("print-in");
//     newRow.innerHTML =ampsuraha +"" + document.getElementById('ametid').selectedOptions[0].text;
//     document.querySelector(".print-boxs").appendChild(newRow);}
//     else {
//       ampsuraha=amet.value*parseInt(tunnid.value);
//       balance_val+=ampsuraha;
//       answer.innerText=balance_val;
//       let newRow=document.createElement("div");
//       newRow.classList.add("print-in");
//       newRow.innerHTML =ampsuraha +"" + document.getElementById('ametid').selectedOptions[0].text;
//       document.querySelector(".print-boxs").appendChild(newRow);

//     }
// }
// function multiplier(){
//     var checkBox = document.getElementById("öötöö");
//     if (checkBox.checked=="True"){
//         ampsuraha=ampsuraha*1.5;
//     }
// }
// btnamps.addEventListener("click", amps)
