import { all, takeLatest, call } from 'redux-saga/effects';
import api from '../../../services/api';
import { ActionTypes } from './types';


function* addingProduct(payload: any) {
    const { product } = payload;

    yield call(api.post, "products", {
        product
    });
}

function* removingProduct(payload: any) {
    const { id } = payload;

    yield call(api.delete, `products/${id}`);
}

function* editingProduct(payload: any) {
    const { product } = payload;

    yield call(api.put, `products/${product.id}`, {
        product
    });
}

export default all([
    takeLatest(ActionTypes.addProductRequest, addingProduct),
    takeLatest(ActionTypes.editProductRequest, editingProduct),
    takeLatest(ActionTypes.removeProductRequest, removingProduct),
]);