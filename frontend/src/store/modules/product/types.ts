export enum ActionTypes {
    getProductRequest = 'GET_PRODUCTS',
    addProductRequest = 'ADD_PRODUCT_REQUEST',
    removeProductRequest = 'REMOVE_PRODUCT_REQUEST',
    editProductRequest = 'EDIT_PRODUCT_REQUEST'
}

export interface IProduct {
    id: number;
    title: string;
    price: number;
    quantity: number;
}

export interface IProductState {
    items: IProduct[];
}
