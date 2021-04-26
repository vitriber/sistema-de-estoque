import { Reducer } from "redux";
import produce from 'immer';
import { ActionTypes, IProductState } from "./types";

const   INITIAL_STATE: IProductState = {
    items: [],
};

const product:Reducer<IProductState> = (state = INITIAL_STATE, action) => {
    return produce(state, draft => {
        switch(action.type) {
            case ActionTypes.getProductRequest: {
                const { items } = action.payload;

                return produce(state, draft => {
                    draft = items;
                })
            }

            case ActionTypes.addProductRequest: {
                const { product } = action.payload;

                return produce(state, draft => {
                    draft.items.push(product);
                })
            }  

            case ActionTypes.editProductRequest: {
                const { product } = action.payload;

                return produce(state, draft => {
                    draft.items[product.id] = {
                        id: product.id,
                        title: product.title,
                        price: product.price,
                        quantity: product.quantity
                    }
                })
            }

            case ActionTypes.removeProductRequest: {
                const { id } = action.payload;

                return produce(state, draft => {
                    draft.items.splice(id, 1);
                })
            }

            default: {
                return draft;
            }
        }
    });
}

export default product;