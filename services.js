import {state} from "./state.js"

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
