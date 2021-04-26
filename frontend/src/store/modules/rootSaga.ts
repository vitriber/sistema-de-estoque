import { all } from 'redux-saga/effects';

import cart from './product/sagas';

export default function* rootSaga() {
    return yield all([
        cart,
    ])
}