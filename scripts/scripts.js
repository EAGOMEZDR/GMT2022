

const botonWhatsapp = document.querySelector(".botonWhat");
console.log(botonWhatsapp);
const texto = document.querySelector(".QR");

botonWhatsapp.onclick=()=>{
    texto.classList.toggle("noMostrar")
};