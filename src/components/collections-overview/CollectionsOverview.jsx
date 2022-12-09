import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/shop/shopSelector';

import "./collections-overview.scss";
import PreviewCollections from '../preview-collections/PreviewCollections';

const CollectionsOverview = ({collections}) => {
    return (
        <div className='collections-overview'>
            {collections.map(({ id, ...otherCollectionsProps }) => {
                return (
                    <PreviewCollections key={id} {...otherCollectionsProps} />
                )
            })}
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);