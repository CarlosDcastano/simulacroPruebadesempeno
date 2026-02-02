
import { getAllUsersJs } from "./services/services.js";
import { getAllProductsJs } from "./services/serviciosProductos.js";
import { renderLogin, renderUserPage, renderAdminPage } from "./DOM/render.js";
import { setupListeners } from "./DOM/listeners.js";
import { state } from "./data/state.js";

async function main() {
    await getAllUsersJs()
    await getAllProductsJs()

    const savedUser = localStorage.getItem("currentUser");
    

    if(savedUser){
    const user = JSON.parse(savedUser);
    state.currentUser = user;

        if (user.role === "admin") {
                renderAdminPage(user.name);
            } else {
                renderUserPage(user.name);
            }
    }else{
        renderLogin();
    }
    setupListeners();
}

main()
