
import {app} from "./elements.js"

export function renderLogin(){

    app.innerHTML = `
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
        "click", (event) =>{
            renderLogin();
        }
    )
}


export function renderUserPage(name){
    app.innerHTML = ""
    const dashboardUser = document.createElement("section");
    dashboardUser.classList.add("dashboardUser");
    dashboardUser.innerHTML=`
        <p>Hola ${name} eres user</p>
    `
    app.appendChild(dashboardUser);

}

export function renderAdminPage(name){
    app.innerHTML = ""
    const dashboardAdmin = document.createElement("section");
    dashboardAdmin.classList.add("dashboardAdmin");
    dashboardAdmin.innerHTML=`
        <p>Hola ${name} eres admin</p>
        
    `
    app.appendChild(dashboardAdmin);

}
    