import { call, put, takeLatest } from "redux-saga/effects";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from "./shopActions";

import ShopActionTypes from "./shopTypes";

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  try {
    yield takeLatest(
      ShopActionTypes.FETCH_COLLECTIONS_START,
      fetchCollectionsAsync
    );
  } catch (error) {
    console.error("Error in Saga", error);
  }
}
