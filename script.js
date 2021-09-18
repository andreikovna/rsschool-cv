const button = document.querySelector('.open-close-menu');
const burger = document.querySelector('.navigation')

let openMenu = false;
function toggleMenu() {
    if (openMenu == false) {
        button.style.backgroundImage = "url(images/close_round_icon.svg)"
        burger.style.display = "inline"
        openMenu = true;
    } else if (openMenu == true) {
        button.style.backgroundImage = "url(images/menu_lines_hamburger_icon.svg)"
        burger.style.display = "none"
        openMenu = false;
    }
}

button.addEventListener('click', toggleMenu)