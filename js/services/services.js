import {state} from "js/data/state.js"

const url = "http://localhost:3000"

export async function getAllUsersJs(){
    try{
        const res = await fetch(`${url}/users`)

        if(!res.ok) throw new Error("No fue posible consultar los usuarios");
        const data = await res.json();
        state.users = data;
        console.log(state.users)
    }catch (error) {
        console.error(error)
    }

}

export async function postUser(name, email, password, rol) {
    try {
        const res = await fetch(`${url}/users`, {
            method: 'POST', // Definimos el método
            headers: {
                'Content-Type': 'application/json' // Obligatorio para que el servidor entienda el cuerpo
            },
            body: JSON.stringify({
                nombre: name,
                email: email,
                password: password,
                role: rol
            })
        });

        if (!res.ok) throw new Error("No se pudo crear el usuario");

        const newUser = await res.json();
        
        // Actualizamos el estado local para que la UI se entere sin recargar
        state.users.push(newUser);
        
        console.log("Usuario creado con éxito:", newUser);
        return newUser;

    } catch (error) {
        console.error("Error en postUser:", error);
    }
}
