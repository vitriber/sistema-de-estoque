import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { IProductState } from './modules/product/types';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

export interface IState {
    product: IProductState;
}

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(...middlewares)
    )
);

sagaMiddleware.run(rootSaga);

export default store;