const waterMelon = document.getElementById("watermelonClick");
const upgrades = document.getElementById("upgrades");
const melonHitbox = document.getElementById("melonHitbox");
const melonAmount = document.getElementById("melonAmount");
const melonPerSecHTML = document.getElementById("melonPerSec");
const building1 = document.getElementById("building1");
const building2 = document.getElementById("building2");
const building3 = document.getElementById("building3");
const building4 = document.getElementById("building4");
const building5 = document.getElementById("building5");
const building6 = document.getElementById("building6");
building1.addEventListener("click", firstBuilding);
building2.addEventListener("click", secondBuilding);
building3.addEventListener("click", thirdBuilding);
building4.addEventListener("click", fourthBuilding);
building5.addEventListener("click", fifthBuilding);
building6.addEventListener("click", sixthBuilding);
const clickUpgrade = document.getElementById("clickUpgrade").addEventListener("click", clickUpgrador);
const clickNumber = document.getElementById("amountOfUpgrades");
const melonClickPrice = document.getElementById("clickAmount");
melonHitbox.addEventListener("click", clickMelon);

let clickPrice = 40;
let amountOfClicks = 1;
function clickUpgrador(){
  if(melons >= clickPrice){
    melons -= clickPrice;
    clickPrice = Math.floor(clickPrice * 1.9);
    amountOfClicks = Math.floor(amountOfClicks * 1.4 * 10) / 10;
    clickNumber.innerHTML = `${amountOfClicks} Melons / click`;
    melonClickPrice.innerHTML = clickPrice;
  }
}
function clickMelon() {
  melons += amountOfClicks;
  melonAmount.innerHTML = melons;
}

let melons = 0;
let melonPerSec = 0;
melonSecUpdate();
let floorMelons = 0;
const secondDivider = 150;

let price1 = 300;
let buildingCount1 = 0;
let building1Melons = 10;
const plantPrice = document.getElementById("plantPrice");
const plantCount = document.getElementById("plantCount");
function firstBuilding() {
  if (melons >= price1) {
    melons -= price1;
    price1 = Math.floor(price1 * 1.3);
    buildingCount1 += 1;
    numberToDisplay(
      price1,
      plantPrice,
      buildingCount1,
      plantCount,
      building1Melons
    );
  }
}

let price2 = 2000;
let buildingCount2 = 0;
let building2Melons = 150;
const farmPrice = document.getElementById("farmPrice");
const farmCount = document.getElementById("farmCount");
function secondBuilding() {
  if (melons > price2) {
    melons -= price2;
    buildingCount2 += 1;
    price2 = Math.floor(price2 * 1.1);
    numberToDisplay(
      price2,
      farmPrice,
      buildingCount2,
      farmCount,
      building2Melons
    );
  }
}

let price3 = 15000;
let buildingCount3 = 0;
let building3Melons = 1500;
const factoryPrice = document.getElementById("factoryPrice");
const factoryCount = document.getElementById("factoryCount");
function thirdBuilding() {
  if (melons > price3) {
    melons -= price3;
    buildingCount3 += 1;
    price3 = Math.floor(price3 * 1.1);
    numberToDisplay(
      price3,
      factoryPrice,
      buildingCount3,
      factoryCount,
      building3Melons
    );
  }
}

let price4 = 250000;
let buildingCount4 = 0;
let building4Melons = 12000;
const templePrice = document.getElementById("templePrice");
const templeCount = document.getElementById("templeCount");
function fourthBuilding() {
  if (melons >= price4) {
    melons -= price4;
    price4 = Math.floor(price4 * 1.12);
    buildingCount4 += 1;
    numberToDisplay(
      price4,
      templePrice,
      buildingCount4,
      templeCount,
      building4Melons
    );
  }
}

let price5 = 100;
let buildingCount5 = 0;
let building5Melons = 1000;
const countryPrice = document.getElementById("countryPrice");
const countryCount = document.getElementById("countryCount");
function fifthBuilding() {
  if (melons >= price5) {
    melons -= price5;
    price5 = Math.floor(price5 * 1.12);
    buildingCount5 += 1;
    numberToDisplay(
      price5,
      countryPrice,
      buildingCount5,
      countryCount,
      building5Melons
    );
  }
}

let price6 = 1000;
let buildingCount6 = 0;
let building6Melons = 1000;
const planetPrice = document.getElementById("planetPrice");
const planetCount = document.getElementById("planetCount");
function sixthBuilding() {
  if (melons >= price6) {
    melons -= price6;
    price6 = Math.floor(price6 * 1.12);
    buildingCount6 += 1;
    numberToDisplay(
      price6,
      planetPrice,
      buildingCount6,
      planetCount,
      building6Melons
    );
  }
}
function numberToDisplay(
  prijs,
  buildingPrice,
  buildingCount,
  buildingNumber,
  addedSeconds
) {
  if (prijs > 10000000) {
    let prijsDisplay = Math.round(prijs / 100000) / 10;
    buildingPrice.innerHTML = `price: ${prijsDisplay}M`;
  } else if (prijs > 10000) {
    let prijsDisplay = Math.round(prijs / 100) / 10;
    buildingPrice.innerHTML = `price: ${prijsDisplay}k`;
  } else {
    buildingPrice.innerHTML = `price: ${prijs}`;
  }
  melonPerSec += addedSeconds;
  melonSecUpdate();
  buildingNumber.innerHTML = buildingCount;
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
