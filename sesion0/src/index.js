console.log("cargado");

// IMPORTAMOS componente
// import {menu} from "./components/menu.js"
import { header } from "./components/header.js";
import { home } from "./vistas/home.js";
import {about} from "./vistas/about.js";

// Componente app, pagina principal, que usa el componente menu
function app(){
    console.log(header())
    return `
        ${header()}         
        <div id="vistas">Aquí van las vistas</div>
    `;
}


document.querySelector("div#root").innerHTML = app();


function navegar(pagina){
    if (pagina === 'home') {
        //Cargamos la vista home
        document.querySelector('#vistas').innerHTML = home();
        
    }else if(pagina === 'about'){
        //Cargamos la vista home
        document.querySelector('#vistas').innerHTML = about();
    }
}

//cargamos por defecto la pagina home
navegar('home')

// 
document.querySelector('#btn-home').addEventListener('click', function() {
    navegar('home')
});
document.querySelector('#btn-about').addEventListener('click', function() {
    navegar('about')
});