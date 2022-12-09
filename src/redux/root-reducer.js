import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; //let us use localStorage as default storage

import userReducer from "./user/userReducer";
import cartReducer from "./cart/cartReducer";
import shopReducer from "./shop/shopReducer";
import directoryReducer from "./directory/directoryReducer";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    shop: shopReducer,
    directory: directoryReducer
});

export default persistReducer(persistConfig, rootReducer);