import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CollectionsOverviewContainer from "../../components/collections-overview/CollectionsOverviewContainer";
import CategoryPageContainer from "../categoryPage/CategoryPageContainer";
import { fetchCollectionsStartAsync } from "../../redux/shop/shopActions";

import "./shopPage.scss";

function ShopPage(props) {
  // console.log("ShopPage props: ", props);

  useEffect(() => {
    // fetch('https://firestore.googleapis.com/v1/projects/e-clothing-site-db/databases/(default)/documents/collections')
    // .then(response=> response.json())
    // .then(collections=> console.log("Api Data: ",collections))

    const { fetchCollectionsStartAsync } = props;
    fetchCollectionsStartAsync();
  }, []);

  const { match } = props;

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route
        path={`${match.path}/:categoryId`}
        component={CategoryPageContainer}
      />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
