/* import {state} from "./state" */
import {app} from "./elements.js"
import {state} from "./state.js"

export function renderLogin(){

    app.innerHTML = `
        <section id="formsection" class="formvisible">

            <img src="./img/logo.png" alt="logo">
            <h1>RestorApp</h1>
            <p>Login to your account</p>
            <form id="loginForm">
                <label for="nameLogin">full Name</label>
                <input id="nameLogin" type="text" placeholder="e.g. John Doe"><br>

                <label for="emailLogin">Email Address</label>
                <input id="emailLogin" type="email" placeholder="name@example.com"><br>

                <label for="roleLogin">Select Role</label>
                <select name="option" id="roleLogin">
                    <option value="user">user</option>
                    <option value="admin">admin</option>
                </select><br><br>
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
            <form id="loginForm">
                <label for="nameLogin">full Name</label>
                <input id="nameLogin" type="text" placeholder="e.g. John Doe"><br>

                <label for="emailLogin">Email Address</label>
                <input id="emailLogin" type="email" placeholder="name@example.com"><br>

                <button id="submitSignUp" type="button">Sign up</button><br>
            </form>
    `
    
    app.appendChild(signUpSection)
    const goBack = document.getElementById("goBack").addEventListener(
        "click", (event) =>{
            renderLogin();
        }
    )
}


export function renderadminPage(user, email, rol){
    state.users.forEach(element, () => {
        if(element.role === rol && element.nombre === user && element.email === email){
            
        }
    })
}
    