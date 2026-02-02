import { renderAdminPage, renderUserPage } from "./DOM/render.js";
import { postUser } from "./services/services.js";
import { state } from "./data/state.js";


export function validarLogin(email, password) {
    // Buscamos directamente al usuario en lugar de usar forEach
    const user = state.users.find(u => u.email === email && u.password === password);

    if (user) {

    state.currentUser = user;

    // GUARDAR SESIÓN en local
    localStorage.setItem("currentUser", JSON.stringify(user));
        if (user.role === "admin") {
            renderAdminPage(user.name);
        } else {
            renderUserPage(user.name);
        }
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}

export function validarSignup(name, email, password, rol) {

    if (/\s/.test(password) || !password) {
        return alert("La contraseña no puede contener espacios");
    }

    const user = state.users.find(u => u.email === email);

    if (user) {
        return alert("Correo electrónico ya fue registrado");
    }

    postUser(name, email, password, rol);
}
