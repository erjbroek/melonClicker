const waterMelon = document.getElementById("watermelonClick");
const upgrades = document.getElementById("upgrades");
const melonHitbox = document.getElementById("melonHitbox");
const melonAmount = document.getElementById("melonAmount");
const melonPerSecHTML = document.getElementById("melonPerSec");
const building1 = document.getElementById("building1");
const building2 = document.getElementById("building2");
building1.addEventListener("click", firstBuilding);
building2.addEventListener("click", secondBuilding);

melonHitbox.addEventListener("click", clickMelon);
let melons = 10000;
let melonPerSec = 0;
melonSecUpdate();
let floorMelons = 0;
const secondDivider = 100;

let price1 = 200;
let buildingCount1 = 0;
let building1Melons = 4;
const plantPrice = document.getElementById("plantPrice");
const plantCount = document.getElementById("plantCount");
function firstBuilding() {
  if (melons >= price1) {
    melons -= price1;
    price1 = Math.floor(price1 * 1.05);
    buildingCount1 += 1;
    numberToDisplay(price1, plantPrice, buildingCount1, plantCount, building1Melons);
  }
}

let price2 = 2500;
let buildingCount2 = 0;
let building2Melons = 1000;
const farmPrice = document.getElementById("farmPrice");
const farmCount = document.getElementById("farmCount");
function secondBuilding() {
  if(melons > price2){
  melons -= price2;
  buildingCount2 += 1;
  price2 = Math.floor(price2 * 1.15);
  numberToDisplay(price2, farmPrice, buildingCount2, farmCount, building2Melons);
  }
}

function numberToDisplay(prijs, buildingPrice, buildingCount, buildingNumber, addedSeconds){
    if(prijs > 10000){
      let prijsDisplay = Math.round(prijs / 100) / 10;
      buildingPrice.innerHTML = `price: ${prijsDisplay}k`;
    }
    else{
      buildingPrice.innerHTML = `price: ${prijs}`;
    }
    melonPerSec += addedSeconds;
    melonSecUpdate();
    buildingNumber.innerHTML = buildingCount;
}
function clickMelon() {
  melons += 1;
  melonAmount.innerHTML = melons;
}

if (melons === 0) {
  floorMelons += 1;
}
//vragen

for (let i = 0; i < 1000000; i++) {
  task(i);
}


function task(i) {
  setTimeout(function () {
    melons = melons + melonPerSec / secondDivider;
    const floorMelons = Math.floor(melons);
    const kDecimal = Math.floor((floorMelons % 1000) / 100);
    const kMelon = Math.floor(floorMelons / 1000);
    const milDecimal = Math.floor((kMelon % 1000) / 100);
    const milMelon = Math.floor(kMelon / 1000);
    if (melons > 1000 && melons <= 1000000) {
      melonAmount.innerHTML = kMelon + "," + kDecimal + "K";
    } else if (kMelon > 1000) {
      melonAmount.innerHTML = milMelon + "," + milDecimal + "Mil";
    } else {
      melonAmount.innerHTML = `${floorMelons}`;
    }
    console.log("test");
  }, (1000 * i) / secondDivider);
}

function melonSecUpdate() {
  const floorMelons = Math.floor(melonPerSec);
  const kDecimal = Math.floor((melonPerSec % 1000) / 100);
  const kMelon = Math.floor(melonPerSec / 1000);
  const milDecimal = Math.floor((kMelon % 1000) / 100);
  const milMelon = Math.floor(kMelon / 1000);
  if (melonPerSec >= 1000 && melonPerSec <= 1000000) {
    const thousandPerSec = kMelon + "," + kDecimal + "K";
    melonPerSecHTML.innerHTML = `${thousandPerSec} melons / second`;
  } else if (kMelon >= 1000) {
    const milionPerSec = milMelon + "," + milDecimal + "Mil";
    melonPerSecHTML.innerHTML = `${milionPerSec} melons / second`;
  } else {
    melonPerSecHTML.innerHTML = `${melonPerSec} melons / second`;
  }
}

function mouseDown() {
  waterMelon.style.bottom = "18px";
}

function mouseUp() {
  waterMelon.style.bottom = "40px";
}
