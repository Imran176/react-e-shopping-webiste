import ShopActionTypes from "./shopTypes";

const INITIAL_STATE = {
    collections: null,
    isFetching: false,
    errorMsg: undefined
}

const shopReducer = ( state= INITIAL_STATE, action) => {
    switch (action.type) {
        case ShopActionTypes.FETCH_COLLECTIONS_START:
            return {
                ...state,
                isFetching: true
            }
        case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                collections: action.payload,
                isFetching: false
            }
        case ShopActionTypes.FETCH_COLLECTIONS_START:
            return {
                ...state,
                isFetching: false,
                errorMsg: action.payload,
                
            }
        default:
            return state;
    }
}

export default shopReducer;