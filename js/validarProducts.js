import { postProduct } from "./services/serviciosProductos.js";
import { state } from "./data/state.js";

export function validarProdct(objProduct){
    const product = state.products.find(prod => prod.name === objProduct.nameProduct)
        if(!product){
            postProduct(objProduct)
        }else{
            alert("Ese producto ya existe");
        }
}