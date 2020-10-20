const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const navHome = document.getElementById('nav-home');
const navAbout = document.getElementById('nav-about');
const navSkills = document.getElementById('nav-skills');
const navProjects = document.getElementById('nav-projects');
const navContact = document.getElementById('nav-contact');
const navItems = [navHome, navAbout, navSkills, navProjects, navContact];


//i+1 is because the index of an array start from 0
function removeSlideOut(){
    navItems.forEach((name, i)=> {
        name.classList.remove(`slide-out-${i+1}`)
    })
}

function addSlideIn(){
    navItems.forEach((name, i) => {
        name.classList.add(`slide-in-${i+1}`)
    })
}

function addSlideOut(){
    navItems.forEach((name, i) => {
        name.classList.add(`slide-out-${i+1}`)
    })
}

function toggleNav() {
    // change the look of menu-bars(between bars and X)
    // use toggle method to add/remove classList 'change' that was define at css
    menuBars.classList.toggle('change');
    // toggle(on/off) a class 'overlay-active'
    overlay.classList.toggle('overlay-active')
    // use if statement to define whether you want menu-items to show or hide
    if(overlay.classList.contains('overlay-active')){
        overlay.classList.add('overlay-slide-right')
        if(overlay.classList.contains('overlay-slide-right')){
            removeSlideOut();
            addSlideIn();
        }
    } else {
        overlay.classList.remove('overlay-slide-right')            
        addSlideOut();
    }
}

// when click those things, we need the nav to show or hide
menuBars.addEventListener('click', toggleNav);
navItems.forEach(nav=> {
    nav.addEventListener('click', toggleNav);
})


