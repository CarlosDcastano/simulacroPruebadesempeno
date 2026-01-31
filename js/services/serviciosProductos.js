import { state } from "../data/state.js";

const url = "http://localhost:3000"

export async function getAllProductsJs(){
    try{
        const res = await fetch(`${url}/products`)

        if(!res.ok) throw new Error("No fue posible consultar los productos.")
        
        const data = await res.json();
        state.products = data
        
        console.log(state.products)
    }catch (error) {
        console.error(error)
    }
}

export async function postProduct(image, name, price, amount, description) {
    try {
        const res = await fetch(`${url}/products`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Obligatorio para que el servidor entienda el cuerpo
            },
            body: JSON.stringify({
                image: image,
                nombre: name,
                precio: price,
                cantidad: amount,
                descripcion: description
            })

        });

        if (!res.ok) throw new Error("No se pudo crear producto")

        const newProduct = await res.json();

        state.products.push(newProduct);

        console.log("Producto creado con éxito", newProduct)
        return newProduct;
        
    } catch (error) {
        console.error("Error en postProduct:", error);
        
    }
}