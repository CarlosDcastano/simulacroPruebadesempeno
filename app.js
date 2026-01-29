import { initUsers, login, logout, getCurrentUser, isAuthenticated, getAllUsers } from "./auth.js";
import { state } from "./state.js";
import { getAllUsersJs } from "./services.js";
import { renderLogin, renderSignUp } from "./render.js";
import { setupListeners } from "./listeners.js";

async function main() {
    renderLogin()
    setupListeners()
    await getAllUsersJs()
}

main()