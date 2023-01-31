import ShopActionTypes from "./shopTypes";
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";

export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START,
})

export const fetchCollectionsSuccess = (collectionsMap) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
})

export const fetchCollectionsFailure = (errorMsg) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FALIURE,
    payload: errorMsg
})

// export const fetchCollectionsStartAsync = () => {
//     return dispatch => {
//         const collectionRef = firestore.collection("collections");
//         dispatch(fetchCollectionsStart());

//         collectionRef.get().then((snapshot) => {
//             const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
//             dispatch(fetchCollectionsSuccess(collectionsMap));
//           }).catch(error=>dispatch(fetchCollectionsFailure(error.message)));
//     }
// }