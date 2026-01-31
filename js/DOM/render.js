
import {app} from "./elements.js"

export function renderLogin(){

    app.innerHTML = `
        <section id="formsection" class="formvisible">

            <img src="./assets/img/logo.png" alt="logo">
            <h1>RestorApp</h1>
            <p>Login to your account</p>
            <form id="loginForm">
                <label for="emailLogin">Email Address</label>
                <input id="emailLogin" type="email" placeholder="name@example.com"><br>

                <label for="passwordLogin">Password</label>
                <input id="passwordLogin" type="password" placeholder="Your password"><br>

                <button id="submitLogin" type="submit">Sign in</button><br>
                <div id="sign up">
                    Don't have an account? <a href="#">sign up</a>
                </div>
            </form>
        </section>
    `

}

export function renderSignUp(){
    app.innerHTML = ""
    const signUpSection = document.createElement("section");
    signUpSection.classList.add("signUpSection");
    signUpSection.innerHTML = `
            <p id="goBack">Go Back</p>
            <img src="./img/logo.png" alt="logo">
            <h1>RestorApp</h1>
            <p>SignUp to your account</p>
            <form id="signUpForm">
                <label for="nameSignUp">full Name</label>
                <input id="nameSignUp" type="text" placeholder="e.g. John Doe"><br>

                <label for="emailSignUp">Email Address</label>
                <input id="emailSignUp" type="email" placeholder="name@example.com"><br>

                <label for="passwordSignUp">Email Address</label>
                <input id="passwordSignUp" type="password" placeholder="Your password"><br>

                <button id="submitSignUp" type="submit">Sign up</button><br>
            </form>
    `
    
    app.appendChild(signUpSection)
    const goBack = document.getElementById("goBack").addEventListener(
        "click", (event) =>{
            renderLogin();
        }
    )
}


export function renderAdminPage(){
    app.innerHTML = ""

}

export function renderUserPage(){
    app.innerHTML = ""

}
    