import React, { useState } from 'react';
import SHOP_DATA from '../../data/shopData';
import "./shopPage.scss"

import PreviewCollections from '../../components/preview-collections/PreviewCollections';

function ShopPage(props) {
    const [collections, setCollections] = useState(SHOP_DATA);

    return (
        <div className='shop-page'>
            <h2>Shop Page</h2>
            {collections.map(({ id, ...otherCollectionsProps }) => {
                return (
                    <PreviewCollections key={id} {...otherCollectionsProps} />
                )
            })}
        </div>
    );
}

export default ShopPage;