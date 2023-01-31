import React from "react";
import { connect } from "react-redux";

import "./category.scss";
import CollectionItem from "../../components/collection-item/CollectionItem";
import { selectCategory } from "../../redux/shop/shopSelector";

function CategoryPage({ collections, isLoading }) {
  const { title, items } = collections;

  return (
    <div className="category-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  collections: selectCategory(ownProps.match.params.categoryId)(state),
});

export default connect(mapStateToProps)(CategoryPage);
