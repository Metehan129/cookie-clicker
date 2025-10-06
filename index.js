let cKie = 1;
let cKies = 0;

class Production{
    costElement;
    cost;
    levelElement;
    increaseElement;
    increase;

    constructor(classText){
        this.costElement = document.querySelector('.' + classText + '_cost');
        this.cost = parseFloat(this.costElement.innerHTML);
        this.levelElement = document.querySelector('.' + classText + '_level');
        this.increaseElement = document.querySelector('.' + classText + '_increas');
        this.increase = parseFloat(this.increaseElement.innerHTML);
    }

    buy() {
        if (parsedCookie >= this.cost) {
            cookie.innerHTML = Math.round(parsedCookie -= this.cost);

            this.levelElement.innerHTML ++;

            this.increase = this.increase
            this.increaseElement.innerHTML = this.increase
            cKies += this.increase;

            this.cost *= 1.15;
            this.costElement.innerHTML = Math.round(this.cost); 
        }
    }
}


let ckieTotall = document.getElementById("ckie-totall");
let ckiesTotall = document.getElementById("ckies-totall");
let cookie = document.querySelector('.cookie_number');
let parsedCookie = parseFloat(cookie.innerHTML);

let cursor = new Production('cursor');
let grandma = new Production('grandma');
let farm = new Production('farm');
let mine = new Production('mine');
let factory = new Production('factory');
let bank = new Production('bank');
let temple = new Production('temple');
let castle = new Production('castle');






setInterval( () => {
    parsedCookie += cKies / 10;
    cookie.innerHTML = Math.round(parsedCookie);
    ckiesTotall.innerHTML = Math.round(cKies);
}, 100);


  const lightBtn = document.getElementById("light_mode");
  const darkBtn = document.getElementById("dark_mode");
  const body = document.body;
  const main = document.querySelector(".main");
  const right = document.querySelector(".right");
  const stats = document.querySelector(".stats");
  const next_level_info = document.querySelectorAll(".next_level_info");
  const upgrades = document.querySelectorAll(".upgrade");

  darkBtn.addEventListener("click", () => {
    body.style.backgroundImage = "url('photos/dark_back.jpeg')";
    main.style.color = "rgb(255, 255, 255)";
    right.style.color = "rgb(255, 255, 255)";
    stats.style.backgroundColor = "rgba(255, 255, 255, 0)";
    next_level_info.forEach(next_level_info => {
   next_level_info.style.backgroundColor = "rgba(0, 0, 0, 0)";
   });
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
  stats.style.backgroundColor = "rgba(255, 255, 255, 0.639)";
  next_level_info.forEach(next_level_info => {
   next_level_info.style.backgroundColor = "rgba(255, 255, 255, 0.639)";
   });
  upgrades.forEach(upgrade => {
    upgrade.style.borderColor = "white";
    upgrade.style.backgroundColor = "rgba(255, 255, 255, 0.549)";
  });
  lightBtn.style.display = "none";
  darkBtn.style.display = "block";
  });