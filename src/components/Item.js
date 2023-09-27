import React from "react";
import { useState } from "react";

function Item({ name, category }) {
  const [isOn,setIsOn] = useState(false)
  const isInCart = ()=> {
    setIsOn(!isOn)
  }
  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button  onClick={isInCart} className="add">{!isOn ?"Add to Cart" : "Remove from Cart"}</button>
    </li>
  );
}

export default Item;
