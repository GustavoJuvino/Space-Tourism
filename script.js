// Menu Mobile
class MenuMobile {
    constructor(menuButton, menuNav, menuClose){
        this.buttonNav = document.querySelector(menuButton);
        this.menuMobile = document.querySelector(menuNav);
        this.closeMenu = document.querySelector(menuClose);

        this.activeClass = this.activeClass.bind(this);
        this.removeClass = this.removeClass.bind(this);
    }

    activeClass(){ this.menuMobile.classList.add("mobile-activated") };
    removeClass(){ this.menuMobile.classList.remove('mobile-activated') };

    openMenu(){
        this.buttonNav.addEventListener('click', this.activeClass)
        this.closeMenu.addEventListener('click', this.removeClass)
    }
}

const menuMobile = new MenuMobile('[data-nav="img"]', '[data-nav="menu"]', '[data-nav="close"]');
menuMobile.openMenu();


// Sections Nav
const allSections = document.querySelectorAll('[data-section]');
const allLis = document.querySelectorAll('[data-li]');
const activateSection = "section-activated";
const activateLI = "li-activated";


function showSection(index){
    // Sections
    allSections.forEach((section) => section.classList.remove(activateSection));
    allSections[index].classList.add(activateSection);

    // Li's
    allLis.forEach((lis) => lis.classList.remove(activateLI));
    allLis[index].classList.add(activateLI);
}


// Body Backgrounds
const backgrounds = {
    home: "url('./Imgs/Home/background-home-desktop.jpg')",
    destiny: "url('./Imgs/Destination/background-destination-desktop.jpg')",
    crew:  "url('./Imgs/Crew/background-crew-desktop.jpg')",
    tech: "url('./Imgs/Technology/background-technology-desktop.jpg')",
    }

class Background{
    constructor(li, img) {
        this.li = li;
        this.img = img;
        this.bodyBackground = this.bodyBackground.bind(this);
    }

    clickBackground(){ return this.li.addEventListener("click", this.bodyBackground) };

    bodyBackground() { return document.body.style.backgroundImage = this.img};
}

const bg1 = new Background(allLis[0], backgrounds.home);
bg1.bodyBackground();
bg1.clickBackground();

const bg2 = new Background(allLis[1], backgrounds.destiny);
bg2.clickBackground();

const bg3 = new Background(allLis[2], backgrounds.crew);
bg3.clickBackground();

const bg4 = new Background(allLis[3], backgrounds.tech);
bg4.clickBackground();


// Dividers
const headerDividers = document.querySelectorAll('[data-divider]');
const headerClass = "bar-header";

function activeDividers(index){
    headerDividers.forEach((divider) => divider.classList.remove(headerClass));
    headerDividers[index].classList.add(headerClass);
}

// Init Click Events
allLis.forEach((li, index) =>{
    li.addEventListener("click", () => {
        showSection(index);
        activeDividers(index);
    });
})

// Button Explore and Button Logo - HOME
const bHome = document.querySelector('[data-button="home"]');
const bLogo = document.querySelector('[data-logo]');

function showDestiny(){

    bg2.bodyBackground();
    allSections.forEach((section) => section.classList.remove(activateSection) );
    allSections[1].classList.add(activateSection);

    headerDividers[1].classList.add(headerClass);
    headerDividers[0].classList.remove(headerClass);
}

bHome.addEventListener("click", () => showDestiny());
bLogo.addEventListener("click", () => window.location.reload());


// Destination
const allMoons = document.querySelectorAll('[data-moons]');
const allBoxes = document.querySelectorAll('[data-box]');
const moonTexts = document.querySelectorAll('[data-mtexts]');
const destination = ["box", "moon-texts"];


// Destination - IMG
function boxes(index){
    allBoxes.forEach((box) => box.classList.remove(destination[0]));
    allBoxes[index].classList.add(destination[0]);
}

// Destination - Texts
function moons(index){
    moonTexts.forEach((moontext) => moontext.classList.remove(destination[1]));
    moonTexts[index].classList.add(destination[1]);
}

function boxesTexts(index){ 
    boxes(index);
    moons(index);
}

// Destination, dividers in the NAV.
const allBars = document.querySelectorAll('[data-bar]');
const barDestination = "bar";

function barMoons(index){
    allBars.forEach((bar) => bar.classList.remove(barDestination));
    allBars[index].classList.add(barDestination);
}

// Init click event in boxesTexts and barMoons.
allMoons.forEach((moon, index) =>{
    moon.addEventListener("click", () => {
        boxesTexts(index);
        barMoons(index);
    });
})


// Crew
const menuCircle = document.querySelectorAll('[data-circle]');
const crewSections = document.querySelectorAll('[data-crew]');
const crewImg = document.querySelectorAll('[data-person]');

const crew = ["crew-activated", "img-crew", "actived"];

function activeCrew(index){

    // Crew - Text
    crewSections.forEach((text) => text.classList.remove(crew[0]));
    crewSections[index].classList.add(crew[0]);

    // Crew - Img
    crewImg.forEach((img) => img.classList.remove(crew[1]));
    crewImg[index].classList.add(crew[1]);

    // Crew - Menu
    menuCircle.forEach((circle) => circle.classList.remove(crew[2]));
    menuCircle[index].classList.add(crew[2]);
}

menuCircle.forEach((item, index) => item.addEventListener('click', () => activeCrew(index)) );


// Technology
const navTech = document.querySelectorAll('[data-navTech]');
const textTech =  document.querySelectorAll('[data-tech]');
const imgTech = document.querySelectorAll('[data-imgTech]');
const responsiveTech = document.querySelectorAll('[data-responsiveTech]');


const tech = ["nav-actived", "tech-active", "imgTech-active","responsive-actived"];

function activeTech(index){

    // Technology - Nav
    navTech.forEach((li) => li.classList.remove(tech[0]));
    navTech[index].classList.add(tech[0]);

    // Technology - Texts
    textTech.forEach((text) => text.classList.remove(tech[1]));
    textTech[index].classList.add(tech[1]);

    // Technology - Img
    imgTech.forEach((img) => img.classList.remove(tech[2]));
    imgTech[index].classList.add(tech[2]);

    // Technology - Responsive Img
    responsiveTech.forEach((r) => r.classList.remove(tech[3]));
    responsiveTech[index].classList.add(tech[3]);

}


navTech.forEach((item, index) => item.addEventListener('click', () => activeTech(index)));