let cKie = 1;

let cookie = document.querySelector('.cookie_number');
let parsedCookie = parseFloat(cookie.innerHTML);

let cursorCost = document.querySelector('.cursor_cost');
let parsedCursor = parseFloat(cursorCost.innerHTML);

let cursorLevel = document.querySelector('.cursor_level');
let cursorIncreas = document.querySelector('.cursor_increas');
let parsedCursorIncreas = parseFloat(cursorIncreas.innerHTML);



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