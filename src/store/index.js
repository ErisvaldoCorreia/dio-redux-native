import { createStore, combineReducers } from 'redux';

import cartState from './cart/reducer';

const store = createStore(
    combineReducers({
        cartState,
    })
);

export default store;
