import { createSelector } from "reselect";

const selectCart = (state) => state.cart; //it's an input selector that just returns a piece of the state

export const selectCartItems = createSelector([selectCart], cart => cart.cartItems);

export const selectCartHidden = createSelector([selectCart], cart => cart.hidden);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce(
            (accumalatedQty, cartItem) => accumalatedQty + cartItem.quantity,
            0
        )
);

export const selectCartItemsTotal = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce(
            (accumalatedPrice, cartItem) => accumalatedPrice + (cartItem.quantity * cartItem.price),
            0
        )
);
