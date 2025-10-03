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

    parsedCursor *= 1.17;
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

    parsedGrandma *= 1.17;
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

    parsedFarm *= 1.17;
    farmCost.innerHTML = Math.round(parsedFarm); 
}
}

setInterval( () => {
    parsedCookie += cKies / 10;
    cookie.innerHTML = Math.round(parsedCookie);
}, 100);