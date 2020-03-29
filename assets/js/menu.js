
const menuButton = document.querySelector('.menu-action');
const menu = document.querySelector('.header-nav');
const filter = document.querySelector('.header-filter');
var open = false;


menuButton.addEventListener('click', switchState);
filter.addEventListener('click', switchState);


function switchState() {
    open = !open;
    animate()
}

function animate() {
    menu.classList.toggle('open');
    filter.style.display = open ? 'block' : 'none'
}