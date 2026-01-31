import { renderAdminPage, renderUserPage } from "./DOM/render.js";
import { postUser } from "./js/services/services.js";
import { state } from "./js/data/state.js";


export function validarLogin(email, password) {
    // Buscamos directamente al usuario en lugar de usar forEach
    const user = state.users.find(u => u.email === email && u.password === password);

    if (user) {
        if (user.role === "admin") {
            renderAdminPage(user.nombre);
        } else {
            renderUserPage(user.nombre);
        }
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}

export function validarSignup(name, email, password, rol){

    const user = state.users.find(u => u.email === email);

    if(!user){
        postUser(name, email, password, rol)
    }else{
        return alert("Correo electrónico ya fue registrado")
    }

}