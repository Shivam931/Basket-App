import React from "react";
import { useCart } from "react-use-cart";
import "./Cart.css";

function Cart() {
  const { isEmpty, items, updateItemQuantity } = useCart();
  if (isEmpty) return <h3>Your Cart is Empty..!!</h3>;
  return (
    <section className="Cart">
      {items.map((item) => {
        return (
          <div key={item.id}>
            <h5 className="Cart__list">
              {item.quantity} {item.title}
              <div>
                <button
                  className="Cart__button"
                  onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <button
                  className="Cart__button"
                  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>
            </h5>
          </div>
        );
      })}
    </section>
  );
}

export default Cart;
