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


/* самооценка*/

console.log ('валидная верстка - 10б');
console.log ('верстка - семантическая - 20б');
console.log ('использование css-стилей - 10б');
console.log ('контент в блоке, который расположен по центру, фоновый цвет на всю страницу - 10б');
console.log (' адаптивная верстка - 10б');
console.log ('есть меню - 10б');
console.log ('присутствует фото - 10б');
console.log ('контакты и скилы оформлены списком - 10б');
console.log ('содержание cv - 10б');
console.log (' пример кода с подсветкой - 10б');
console.log ('ссылки-изображения на проекты - 10б');
console.log ('cv на английском - 10б');
console.log ('требования к PR - 10б');
console.log ('видеорезюме - 10б');
console.log ('дизайн, оформление -10б');