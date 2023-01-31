import React from "react";
import { connect } from "react-redux";
import "./collection-item.scss";

import CustomBtn from "../custom-btn/CustomBtn";

import { addItem } from "../../redux/cart/cartActions";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      >
        <div className="collection-footer">
          <span className="name">{name}</span>
          <span className="price">${price}</span>
        </div>
        <CustomBtn inverted onClick={() => addItem(item)}>
          Add To Cart
        </CustomBtn>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
