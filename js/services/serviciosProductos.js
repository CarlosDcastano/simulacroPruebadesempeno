import { state } from "../data/state.js";

const url = "http://localhost:3000"

export async function getAllProductsJs(){
    try{
        const res = await fetch(`${url}/products`)

        if(!res.ok) throw new Error("No fue posible consultar los productos.")
        
        const data = await res.json();
        state.products = data
        
    }catch (error) {
        console.error(error)
    }
}

export async function postProduct(product) {
    try {
        const res = await fetch(`${url}/products`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Obligatorio para que el servidor entienda el cuerpo
            },
            body: JSON.stringify(product)

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

export async function patchProduct(id, updatedfields) {
    try {
        const res = await fetch(`${url}/products/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json' // Obligatorio para que el servidor entienda el cuerpo
            },
            body: JSON.stringify(updatedfields)

        });

        if (!res.ok) throw new Error("No se pudo editar el producto")

        const updatedProduct = await res.json();

        const index = state.products.findIndex(p => p.id === id);
        if (index !== -1) {
            state.products[index] = updatedProduct;
        }

        console.log("Producto editado con éxito", updatedProduct)
        return updatedProduct;
        
    } catch (error) {
        console.error("Error en patchProduct:", error);
        
    }
}

export async function deleteProd(id) {
    try {
        const res = await fetch(`${url}/products/${id}`, {
            method: 'DELETE',
        });

        if (!res.ok) throw new Error("No se pudo eliminar el producto")
        
        state.products = state.products.filter(p => p.id !== id);

        console.log("Producto eliminado con éxito", updatedProduct)
        
    } catch (error) {
        console.error("Error en deleteProduct:", error);
        
    }
    
}