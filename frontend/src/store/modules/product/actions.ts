import { ActionTypes, IProduct, IProductState } from "./types";

export function getProducts(items: IProductState){
    return {
        type: ActionTypes.getProductRequest,
        payload: {
            items,
        }
    };
}

export function addProduct(product: IProduct){
    return {
        type: ActionTypes.addProductRequest,
        payload: {
            product,
        }
    };
}

export function removeProduct(id: Number){
    return {
        type: ActionTypes.removeProductRequest,
        payload: {
            id,
        }
    };
}

export function editProduct(product: IProduct){
    return {
        type: ActionTypes.editProductRequest,
        payload: {
            product,
        }
    };
}