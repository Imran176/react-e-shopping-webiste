import { UserActionsTypes } from "./userActionsTypes";

export const setCurrentUser = user => ({
    type: UserActionsTypes.SET_CURRENT_USER,
    payload: user
})