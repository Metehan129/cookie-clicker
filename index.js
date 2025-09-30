let cookie = document.querySelector('.cookie_number');
let parsedCookie = parseFloat(cookie.innerHTML);

let cursorCost = document.querySelector('.cursor_cost');
let parsedCursor = parseFloat(cursorCost.innerHTML);

function countCookie() {
    parsedCookie  += 1;
    cookie.innerHTML = parsedCookie;
}

function buyCursor() {
    if (parsedCookie >= parsedCursor) {
    parsedCookie -= parsedCursor;
    cookie.innerHTML = parsedCookie;
}
}