import { useState } from "react";
import { useShoppingCart } from "../context/cartContext";

export default function Cart() {
  return (
    <i className="bi bi-basket cart">
      <div className="cartAmount"> 0</div>
    </i>
  );
}
