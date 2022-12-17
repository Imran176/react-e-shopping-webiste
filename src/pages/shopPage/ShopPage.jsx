import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import "./shopPage.scss";
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview';
import CategoryPage from '../categoryPage/CategoryPage';

function ShopPage({match}) {
    // const [collections, setCollections] = useState(collections);
    return (
        <div className='shop-page'>
            <h2>Shop Page</h2>
            <Route exact path={`${match.path}`} component={CollectionsOverview} />
            <Route path={`${match.path}/:categoryId`} component={CategoryPage} />
        </div>
    );
}

export default ShopPage;