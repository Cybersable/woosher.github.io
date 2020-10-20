const hamburger = document.querySelector('.hamburger')
const menu = document.querySelector('.main-menu')
hamburger && menu && hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active')
    menu.classList.toggle('active')
})
