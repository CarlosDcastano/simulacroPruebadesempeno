import { app } from "./elements.js";
import { renderSignUp, renderAdminPage } from "./render.js";
import { validarLogin, validarSignup } from "../validarUser.js";
import { User } from "../models/user.js"
import { Product } from "../models/product.js";
import { validarProdct } from "../validarProducts.js";
import { state } from "../data/state.js";
import { patchProduct, deleteProd } from "../services/serviciosProductos.js";

export function setupListeners() {

    app.addEventListener("click", (event) => {
        if (event.target.tagName === "A") {
            renderSignUp()
        }
    })

    app.addEventListener("submit", event => {
        event.preventDefault();
        if (event.target.id === "loginForm") {
            const emailLogin = event.target.querySelector("#emailLogin").value;
            const passwordLogin = event.target.querySelector("#passwordLogin").value;
            validarLogin(emailLogin, passwordLogin)

        }
    })

    app.addEventListener("submit", event => {
        event.preventDefault();
        if (event.target.id === "signUpForm") {
            const nameSignUp = event.target.querySelector("#nameSignUp").value.trim();
            const emailSignUp = event.target.querySelector("#emailSignUp").value.trim();
            const passwordSignUp = event.target.querySelector("#passwordSignUp").value.trim();

            const user = new User(nameSignUp, emailSignUp, passwordSignUp)

            validarSignup(user.name, user.email, user.password, user.rol)

        }

    })

    app.addEventListener("click", event => {
        if (event.target.id === "togleRegisterProd") {
            const formProductsRegister = document.getElementById("formProductsRegister");
            formProductsRegister.style.display = formProductsRegister.style.display === "block" ? "none" : "block";
        }
    });

    app.addEventListener("submit", event => {
        event.preventDefault();
        if (event.target.id === "formProductsRegister") {
            const prodName = event.target.querySelector("#productName").value.trim();
            const prodDescription = event.target.querySelector("#productDesc").value.trim();
            const prodPrice = event.target.querySelector("#productPrice").value.trim();

            const product = new Product(prodName, prodDescription, prodPrice);

            validarProdct(product)

        }

    });

    let productIdEditing = null;


// ABRIR MODAL

app.addEventListener("click", (e) => {
    if (e.target.classList.contains("editProd")) {

        const id = e.target.dataset.id;
        productIdEditing = id;

        const product = state.products.find(p => p.id == id);

        document.getElementById("editName").value = product.prodName;
        document.getElementById("editDesc").value = product.prodDescription;
        document.getElementById("editPrice").value = product.prodPrice;

        document.getElementById("editModal").classList.remove("hidden");
    }
});



   //CERRAR MODAL

app.addEventListener("click", (e) => {
    if (e.target.id === "closeModal") {
        document.getElementById("editModal").classList.add("hidden");
        productIdEditing = null;
    }
});



  // GUARDAR CAMBIOS (FORM SUBMIT)

app.addEventListener("submit", async (e) => {

    if (e.target.id === "editProductForm") {

        e.preventDefault(); // ESTA LÍNEA ES LA QUE EVITA EL REFRESH

        const name = document.getElementById("editName").value.trim();
        const desc = document.getElementById("editDesc").value.trim();
        const price = document.getElementById("editPrice").value.trim();

        if (!name || !desc || !price) {
            alert("Todos los campos son obligatorios");
            return;
        }

        const updatedData = {
            prodName: name,
            prodDescription: desc,
            prodPrice: Number(price)
        };

        try {
            await patchProduct(productIdEditing, updatedData);

            document.getElementById("editModal").classList.add("hidden");
            productIdEditing = null;

            // Re-render para ver cambios
            renderAdminPage("algo");

        } catch (error) {
            console.error("Error actualizando producto:", error);
            alert("No se pudo actualizar el producto");
        }
    }
});

    document.addEventListener("click", async (e) => {

    if (e.target.classList.contains("deleteProd")) {
        const id = e.target.dataset.id;

        const confirmDelete = confirm("¿Seguro que quieres eliminar este producto?");
        if (!confirmDelete) return;

        await deleteProd(id);

        renderAdminPage(state.currentUser.name);
    }

});
}