// Animacion para el menu despegable
let iconmenu = document.querySelector(".icon-menu");
let iconmenu2 = document.querySelector(".iconmenu-c");
let menu = document.querySelector(".menu_despegable");
let fondos = document.getElementById("modo_black");

// Aparación del menu
iconmenu.addEventListener("click", ()=>{
    menu.classList.toggle("animacionmenu");
    fondos.classList.toggle("fondo-oscuro");
});

iconmenu2.addEventListener("click", ()=>{
    menu.classList.toggle("animacionmenu");
    fondos.classList.toggle("fondo-oscuro");
});

/* Mostrar el Login para iniciar como usuario */
let acceso = document.getElementById("buttonAccesso");

acceso.addEventListener("click", ()=>{
    let div_login = document.getElementById("div_login");

    div_login.classList.add("animacionLogin");
});

let buttonAcceso = document.getElementById("buttonAccesso");

buttonAcceso.addEventListener("click", ()=>{
    fondos.classList.toggle("fondo-oscuro");
});

let buttonSalir = document.getElementById("buttonSalir");
let div_login = document.getElementById("div_login");
let ventanaModal = document.getElementById("ventanaModalSalir");

buttonSalir.addEventListener("click", ()=>{
    event.preventDefault();
    div_login.style.zIndex = 0;

    ventanaModal.style.display = "flex";
});

// Acciones a tomar cuando el usuario le de click en los botones de confirmacion para salir del login
let buttonVerified = document.getElementById("button-verified");
let buttonVerifiedExit = document.getElementById("button-verifiedExit");

// Acciones a tomar si el usuario le da en confirmar a salir del login
buttonVerified.addEventListener("click", ()=>{
    ventanaModal.style.display = "none";
    fondos.classList.remove("fondo-oscuro");

    setTimeout(function() {
        div_login.classList.toggle("animacionLogin");
        div_login.style.zIndex = 1;
    }, 200);
});

// Acciones a tomar si el usuario cancela salir del login
buttonVerifiedExit.addEventListener("click", ()=>{
    ventanaModal.style.display = "none";
    div_login.style.zIndex = 1;
});

// Codigo para las animaciones del Slider de imagenes
let imagenes = document.querySelectorAll(".slider-imgs img");
let indiceActual = 0;

function aplicarEstilos() {
    imagenes[indiceActual].classList.add('animacion-slider');
    setTimeout(() => {
        imagenes[indiceActual].classList.remove('animacion-slider');
        indiceActual = (indiceActual + 1) % imagenes.length;
        aplicarEstilos();
    }, 5000); // Cambia de imagen cada 5 segundos
}

aplicarEstilos();

// Estilos para cuando el usuario este encima de la publicidad
let imgPublicidad2 = document.querySelector(".segunda-publicidad");

imgPublicidad2.addEventListener("mouseover", ()=>{
    imgPublicidad2.style.boxShadow = "3px 3px 15px white, -3px -3px 15px white";
});

imgPublicidad2.addEventListener("mouseout", ()=>{
    imgPublicidad2.style.boxShadow = "";
});

// Aplicar estilos a el login de Iniciar Sesion

let visible_password = document.querySelector(".visible-password");
let invisible_password = document.querySelector(".invisible-password");
let inputClave = document.getElementById("InputClave");

visible_password.addEventListener("click", ()=>{
    invisible_password.style.display = "inline";

    visible_password.style.display = "none";

    if(inputClave.type === "password"){
        inputClave.type = "text";
    };
});

invisible_password.addEventListener("click", ()=>{
    visible_password.style.display = "inline";

    invisible_password.style.display = "none";

    if(inputClave.type === "text"){
        inputClave.type = "password";
    };
});

















