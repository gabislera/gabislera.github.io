function menuShow() {
    let menuMobile = document.querySelector('.menu-fechado')
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open')
    } else {
        menuMobile.classList.add('open')
    }
}