
import { getAllUsersJs } from "js/services/services.js";
import { renderLogin } from "js/DOM/render.js";
import { setupListeners } from "js/DOM/listeners.js";

async function main() {
    renderLogin()
    setupListeners()
    await getAllUsersJs()
}

main()