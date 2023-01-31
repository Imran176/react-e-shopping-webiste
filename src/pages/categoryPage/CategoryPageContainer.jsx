import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectIsCollectionsLoaded } from '../../redux/shop/shopSelector';
import withSpinner from '../../components/with-spinner/withSpinner';
import CategoryPage from './CategoryPage';

const mapStateToProps = createStructuredSelector({
    isLoading: (state) => !selectIsCollectionsLoaded(state)
});

const CategoryPageContainer = compose(
    connect(mapStateToProps),
    withSpinner
)(CategoryPage)

export default CategoryPageContainer;