export function initUsers() {
    if (!sessionStorage.getItem("users")) {
        const users = [
            { id: 1, name: "Carlos", email: "carlos@gmail.com", role: "trainer" },
            { id: 2, name: "Jenni", email: "jenni@gmail.com", role: "trainer" },
            { id: 3, name: "Gabriela", email: "gabriela@gmail.com", role: "admin" },
        ];
        sessionStorage.setItem("users", JSON.stringify(users));
    }
}

export function login(email) {
    const users = JSON.parse(sessionStorage.getItem("users")) || [];
    const user = users.find((u) => u.email === email);
    if (!user) throw new Error("Usuario no encontrado");
    sessionStorage.setItem("currentUser", JSON.stringify(user));
    return user;
}

export function logout() {
    sessionStorage.removeItem("currentUser");
}

export function getCurrentUser() {
    return JSON.parse(sessionStorage.getItem("currentUser"));
}

export function isAuthenticated() {
    return !!sessionStorage.getItem("currentUser");
}

export function getAllUsers() {
    return JSON.parse(sessionStorage.getItem("users")) || [];
}