import { postProduct } from "./services/serviciosProductos.js";
import { state } from "./data/state.js";

export function validarProdct(product){
    console.log(state.products)
    const existProduct = state.products.find(prod => prod.name === product.prodName)
        if(existProduct){
            alert("Ese producto ya existe");
        }else{
            postProduct(product)
        }
}

export function validarEditedProduct(id){
    
}