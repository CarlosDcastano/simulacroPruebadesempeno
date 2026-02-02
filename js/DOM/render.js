
import { app, } from "./elements.js"
import { state } from "../data/state.js";

let productIdEditing = null;


export function renderLogin() {

    app.innerHTML = `
    <div class="mainForms">
        <section id="formsection" class="formvisible">

            <img src="./img/logo.png" alt="logo">
            <h1>RestorApp</h1>
            <p>Login to your account</p>
            <form id="loginForm">
                <label for="emailLogin">Email Address</label>
                <input id="emailLogin" type="email" placeholder="name@example.com" required><br>

                <label for="passwordLogin">Password</label>
                <input id="passwordLogin" type="password" placeholder="Your password" required><br>

                <button id="submitLogin" type="submit">Sign in</button><br>
                <div id="sign up">
                    Don't have an account? <a href="#">sign up</a>
                </div>
            </form>
        </section>
    </div>
    `

}

export function renderSignUp() {
    app.innerHTML = ""
    const signUpSection = document.createElement("section");
    signUpSection.classList.add("signUpSection");
    signUpSection.innerHTML = `
        <p id="goBack">Go Back</p>
        <img src="./img/logo.png" alt="logo">
        <h1>RestorApp</h1>
        <p>SignUp to your account</p>
        <form id="signUpForm">
            <label for="nameSignUp">Full Name</label><br>
            <input id="nameSignUp" type="text" placeholder="e.g. John Doe" required><br><br>
            <label for="emailSignUp">Email Address</label><br>
            <input id="emailSignUp" type="email" placeholder="name@example.com" required><br><br>
            <label for="passwordSignUp">Password</label><br>
            <input id="passwordSignUp" type="password" placeholder="Your password" required><br><br>
            <button id="submitSignUp" type="submit">Sign up</button><br>
        </form>
    `

    app.appendChild(signUpSection)
    const goBack = document.getElementById("goBack").addEventListener(
        "click", (event) => {
            renderLogin();
        }
    )
}

function logout() {
    localStorage.removeItem("currentUser");
    state.currentUser = null;
    renderLogin();
}

export function renderUserPage(name) {
    app.innerHTML = ""
    const dashboardUser = document.createElement("section");
    dashboardUser.classList.add("dashboardUser");
    dashboardUser.innerHTML = `
        <button id="logoutBtn" type="button">Cerrar sesión</button>
        <p>Hola ${name} eres user</p>
    `
    app.appendChild(dashboardUser);

    document.addEventListener("click", e => {
        if (e.target.id === "logoutBtn") {
            logout();
        }
    });

}

export function renderAdminPage(name) {
    app.innerHTML = ""
    const dashboardAdmin = document.createElement("section");
    dashboardAdmin.classList.add("dashboardAdmin");
    dashboardAdmin.innerHTML = `
        <div id="saludoLogout">
            <p id="">Bienvenid@ ${name}</p>
            <button id="logoutBtn" type="button">Cerrar sesión</button>
        </div>
        <div id="requestsProducts">
            <section id="requests" class="sectionsProd">
                <p>Aquí van los pedidos</p>
            </section>
            <section id="productsRegister" class="sectionsProd">
                <button id="togleRegisterProd" type="button">Nuevo producto</button>
                <form id="formProductsRegister" style="display: none;">
                    <label for="productImage">Imagen para el producto</label>
                    <input id="productImage" type="image"><br><br>

                    <label for="productName"> Nombre del producto</label>
                    <input id="productName" type="text"><br><br>

                    <label for="productDesc">Descripción del producto</label>
                    <input id="productDesc" type="text"><br><br>

                    <label for="productPrice">Precio del producto</label>
                    <input id="productPrice" type="number"><br><br>

                    <button id="submitProduct" type="submit">Agregar producto</button>
                </form>
            </section>

            <section id="productsList" class="sectionsProd">

            </section>
        </div>

    <div id="editModal" class="modal hidden">
        <div class="modal-content">
            <h3>Editar producto</h3>

            <form id="editProductForm">
                <input type="text" id="editName" placeholder="Nombre"><br><br>
                <input type="text" id="editDesc" placeholder="Descripción"><br><br>
                <input type="number" id="editPrice" placeholder="Precio"><br><br>

                <button type="submit">Guardar cambios</button>
                <button type="button" id="closeModal">Cancelar</button>
            </form>
        </div>
    </div>
    `
    app.appendChild(dashboardAdmin);

    const productsList = document.getElementById("productsList")
    state.products.forEach(product => {
        const article = document.createElement("article")
        article.classList.add("eachProduct")
        article.innerHTML = `
        <p id="productImage">${product.prodImage}</p>
        <p id="productName">${product.prodName}</p>
        <p id="productDescription">${product.prodDescription}</p>
        <p id="productDescription">Precio: ${product.prodPrice}</p>
        <button class="editProd" data-id="${product.id}" type="button">Edit product</button>
        <button class="deleteProd" data-id="${product.id}" type="button">Delete product</button>

    `
        productsList.appendChild(article)
    })

        document.addEventListener("click", e => {
        if (e.target.id === "logoutBtn") {
            logout();
        }
    });



}

function openEditModal(id) {
    const modal = document.getElementById("editModal");
    modal.classList.remove("hidden");

    const product = state.products.find(p => p.id === id);

    productIdEditing = id;

    document.getElementById("editName").value = product.nameProduct;
    document.getElementById("editDesc").value = product.Description;
    document.getElementById("editPrice").value = product.precio;
}


