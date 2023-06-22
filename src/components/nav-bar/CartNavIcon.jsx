import { useState } from "react";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../context/cartContext";

export default function Cart() {
  const { cartQuantity } = useShoppingCart();

  return (
    <Link to="/checkout">
      <i className="bi bi-basket cart">
        <div className="cartAmount"> {cartQuantity}</div>
      </i>
    </Link>
  );
}
