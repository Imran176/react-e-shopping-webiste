import { createSelector } from "reselect";

const selectUser = (state) => state.user; //it's an input selector that just returns a piece of the state

export const selectCurrentUser = createSelector([selectUser], user => user.currentUser);