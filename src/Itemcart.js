import React from "react";
import { useCart } from "react-use-cart";
import "./Itemcart.css";

function Itemcart(props) {
  const { addItem } = useCart();
  return (
    <div className="Item">
      <h5 className="Item__list">
        <h3>
          <img src={props.img} alt="" className="Item__img" />
        </h3>
        <h3>{props.title}</h3>

        <button className="Item__button" onClick={() => addItem(props.item)}>
          <span>Add</span>
        </button>
      </h5>
    </div>
  );
}

export default Itemcart;
