import React from "react";
import { useCart } from "react-use-cart";
import "./Itemcart.css";

function Itemcart(props) {
  const { addItem } = useCart();
  return (
    <div className="Item">
      <h5 className="Item__list">
        {props.title}
        <button className="Item__button" onClick={() => addItem(props.item)}>
          Add
        </button>
      </h5>
    </div>
  );
}

export default Itemcart;
