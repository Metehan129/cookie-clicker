let cKie = 1;

let cKies = 0;

let cookie = document.querySelector('.cookie_number');
let parsedCookie = parseFloat(cookie.innerHTML);

let cursorCost = document.querySelector('.cursor_cost');
let parsedCursor = parseFloat(cursorCost.innerHTML);
let cursorLevel = document.querySelector('.cursor_level');
let cursorIncreas = document.querySelector('.cursor_increas');
let parsedCursorIncreas = parseFloat(cursorIncreas.innerHTML);

let grandmaCost = document.querySelector('.grandma_cost');
let parsedGrandma = parseFloat(grandmaCost.innerHTML);
let grandmaLevel = document.querySelector('.grandma_level');
let grandmaIncreas = document.querySelector('.grandma_increas');
let parsedGrandmaIncreas = parseFloat(grandmaIncreas.innerHTML);

let farmCost = document.querySelector('.farm_cost');
let parsedFarm = parseFloat(farmCost.innerHTML);
let farmLevel = document.querySelector('.farm_level');
let farmIncreas = document.querySelector('.farm_increas');
let parsedFarmIncreas = parseFloat(farmIncreas.innerHTML);

let mineCost = document.querySelector('.mine_cost');
let parsedMine = parseFloat(mineCost.innerHTML);
let mineLevel = document.querySelector('.mine_level');
let mineIncreas = document.querySelector('.mine_increas');
let parsedMineIncreas = parseFloat(mineIncreas.innerHTML);

let fatoryCost = document.querySelector('.fatory_cost');
let parsedFatory = parseFloat(fatoryCost.innerHTML);
let fatoryLevel = document.querySelector('.fatory_level');
let fatoryIncreas = document.querySelector('.fatory_increas');
let parsedFatoryIncreas = parseFloat(fatoryIncreas.innerHTML);



function countCookie() {
    cookie.innerHTML = Math.round(parsedCookie += cKie);
}

function buyCursor() {
    if (parsedCookie >= parsedCursor) {
    cookie.innerHTML = Math.round(parsedCookie -= parsedCursor);

    cursorLevel.innerHTML ++;

    parsedCursorIncreas = parseFloat((parsedCursorIncreas * 1.03).toFixed(2));
    cursorIncreas.innerHTML = parsedCursorIncreas
    cKie += parsedCursorIncreas;

    parsedCursor *= 1.15;
    cursorCost.innerHTML = Math.round(parsedCursor); 
}
}


function buyGrandma() {
    if (parsedCookie >= parsedGrandma) {
    cookie.innerHTML = Math.round(parsedCookie -= parsedGrandma);

    grandmaLevel.innerHTML ++;

    parsedGrandmaIncreas = parseFloat((parsedGrandmaIncreas * 1.03).toFixed(2));
    grandmaIncreas.innerHTML = parsedGrandmaIncreas
    cKies += parsedGrandmaIncreas;

    parsedGrandma *= 1.15;
    grandmaCost.innerHTML = Math.round(parsedGrandma); 
}
}



function buyFarm() {
    if (parsedCookie >= parsedFarm) {
    cookie.innerHTML = Math.round(parsedCookie -= parsedFarm);

    farmLevel.innerHTML ++;

    parsedFarmIncreas = parseFloat((parsedFarmIncreas * 1.03).toFixed(2));
    farmIncreas.innerHTML = parsedFarmIncreas
    cKies += parsedFarmIncreas;

    parsedFarm *= 1.15;
    farmCost.innerHTML = Math.round(parsedFarm); 
}
}



function buyMine() {
    if (parsedCookie >= parsedMine) {
    cookie.innerHTML = Math.round(parsedCookie -= parsedMine);

    mineLevel.innerHTML ++;

    parsedMineIncreas = parseFloat((parsedMineIncreas * 1.03).toFixed(2));
    mineIncreas.innerHTML = parsedMineIncreas
    cKies += parsedMineIncreas;

    parsedMine *= 1.15;
    mineCost.innerHTML = Math.round(parsedMine); 
}
}



function buyFatory() {
    if (parsedCookie >= parsedFatory) {
    cookie.innerHTML = Math.round(parsedCookie -= parsedFatory);

    fatoryLevel.innerHTML ++;

    parsedFatoryIncreas = parseFloat((parsedFatoryIncreas * 1.03).toFixed(2));
    fatoryIncreas.innerHTML = parsedFatoryIncreas
    cKies += parsedFatoryIncreas;

    parsedFatory *= 1.15;
    fatoryCost.innerHTML = Math.round(parsedFatory); 
}
}

setInterval( () => {
    parsedCookie += cKies / 10;
    cookie.innerHTML = Math.round(parsedCookie);
}, 100);


  const lightBtn = document.getElementById("light_mode");
  const darkBtn = document.getElementById("dark_mode");
  const body = document.body;
  const main = document.querySelector(".main");
  const right = document.querySelector(".right");
  const upgrades = document.querySelectorAll(".upgrade");

  
  
  
  darkBtn.addEventListener("click", () => {
    body.style.backgroundImage = "url('photos/dark_back.jpeg')";
    main.style.color = "rgb(255, 255, 255)";
    right.style.color = "rgb(255, 255, 255)";
    upgrades.forEach(upgrade => {
   upgrade.style.borderColor = "rgba(60, 60, 60, 1)";
   upgrade.style.backgroundColor = "rgba(0, 0, 0, 0)";
   });
    darkBtn.style.display = "none";
    lightBtn.style.display = "block";
  });


  lightBtn.addEventListener("click", () => {
  body.style.backgroundImage = "url('photos/middle-background.png')";
  main.style.color = "rgb(79, 79, 79)";
  right.style.color = "rgb(79, 79, 79)";
  upgrades.forEach(upgrade => {
    upgrade.style.borderColor = "white";
    upgrade.style.backgroundColor = "rgba(255, 255, 255, 0.549)";
  });
  lightBtn.style.display = "none";
  darkBtn.style.display = "block";
  });