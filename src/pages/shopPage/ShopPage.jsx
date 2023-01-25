import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import "./shopPage.scss";
import CollectionsOverview from "../../components/collections-overview/CollectionsOverview";
import CategoryPage from "../categoryPage/CategoryPage";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
import { async } from "@firebase/util";

import { updateCollections } from "../../redux/shop/shopActions";

function ShopPage(props) {
  // const [collections, setCollections] = useState(collections);
  let unsubscribeFromSnapshot = null;

  useEffect(() => {
    console.log("ShopPage Props: ",props);
    const { updateCollections } = props;
    const collectionRef = firestore.collection("collections");

    collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
    });
  }, []);

  return (
    <div className="shop-page">
      <h2>Shop Page</h2>
      <Route exact path={`${props.match.path}`} component={CollectionsOverview} />
      <Route path={`${props.match.path}/:categoryId`} component={CategoryPage} />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
