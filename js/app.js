
import { getAllUsersJs } from "./services/services.js";
import { getAllProductsJs } from "./services/serviciosProductos.js";
import { renderLogin } from "./DOM/render.js";
import { setupListeners } from "./DOM/listeners.js";

async function main() {
    renderLogin()
    setupListeners()
    await getAllUsersJs()
    await getAllProductsJs()
}

main()
