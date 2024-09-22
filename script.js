let open = document.getElementById('open-menu')
let close = document.getElementById('close-menu')
let menuMobile = document.getElementById('menu-mobile')

open.onclick = function () {
    menuMobile.style.right = 0
}
close.onclick = function () {
    menuMobile.style.right = '-340px'
}