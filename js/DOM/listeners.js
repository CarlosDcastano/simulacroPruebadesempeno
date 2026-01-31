import { app } from "./elements.js";
import { renderSignUp} from "./render.js";
import { validarLogin, validarSignup } from "../validarUser.js";
import {User} from "../models/user.js"
import { Product } from "../models/product.js";
import { validarProdct } from "../validarProducts.js";

export function setupListeners() {

    app.addEventListener("click", (event) => {
        if (event.target.tagName === "A") {
            renderSignUp()
        }
    })

    app.addEventListener("submit", event =>{
        event.preventDefault();
        if(event.target.id === "loginForm"){
            const emailLogin = event.target.querySelector("#emailLogin").value;
            const passwordLogin = event.target.querySelector("#passwordLogin").value;
            validarLogin(emailLogin, passwordLogin)

        }
    })

    app.addEventListener("submit", event =>{
        event.preventDefault();
        if(event.target.id === "signUpForm"){
            console.log("click")
            const nameSignUp = event.target.querySelector("#nameSignUp").value;
            const emailSignUp = event.target.querySelector("#emailSignUp").value;
            const passwordSignUp = event.target.querySelector("#passwordSignUp").value;

            const user = new User(nameSignUp, emailSignUp, passwordSignUp)

            validarSignup(user.name, user.email, user.password, user.rol)

        }

    })

    app.addEventListener("submit", event =>{
        event.preventDefault();
        if(event.target.id === "createProduct"){
            console.log("click")
            const nameProduct = event.target.querySelector("#nameSignUp").value.trim();
            const priceProduct = event.target.querySelector("#emailSignUp").value.trim();
            const amountProduct = event.target.querySelector("#passwordSignUp").value.trim();
            const descriptionProduct = event.target.querySelector("#passwordSignUp").value.trim();

            const product = new Product (nameProduct, priceProduct, amountProduct, descriptionProduct);

            validarProdct(product)
            
        }   

    })

    

}