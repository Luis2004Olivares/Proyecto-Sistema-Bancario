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