
function showMenu(){
    let menu = document.querySelector('.mobile-menu');

    if(menu.classList.contains('open') ){
        menu.classList.remove('open');
        document.querySelector('.icon').src = 'assets/images/icon-hamburger.svg'

    } else{
        menu.classList.add('open');
        document.querySelector('.icon').src = 'assets/images/icon-close.svg'

    }
}



