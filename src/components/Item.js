import React from "react";
import { useState } from "react";

function Item({ name, category }) {
  const[inCart,setCartState]=useState(false)
  const[isYellow,setColor]=useState(false)
  function handleClick(){
    setCartState((inCart)=>!inCart)
    setColor((isYellow)=>!isYellow)
  }
  const buttonStyle = {
    backgroundColor: isYellow ? "yellow" : "green",
  };
  return (
    <li className={inCart ? "in-cart":""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button style={buttonStyle} onClick={handleClick} className="add">{inCart?"Remove From Cart":"Add to Cart"}</button>
    </li>
  );
}

export default Item;
