import { menu } from "./menu.js";

export function header(){
    return `
        ${menu()}
        <h1>Mi componente APP</h1>
        
    `;
}