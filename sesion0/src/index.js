console.log("cargado");

// IMPORTAMOS componente
// import {menu} from "./components/menu.js"
import { header } from "./components/header.js";

// Componente app, pagina principal, que usa el componente menu
function app(){
    console.log(header())
    return `
        ${header()}         
    `;
}


document.querySelector("div#root").innerHTML = app();
