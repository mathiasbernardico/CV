function funcion(){
    var menu = document.getElementsByClassName("nav");
    for(i=0;i < menu.length; i++){
        menu[i].classList.toggle('oculto');
    }
}
