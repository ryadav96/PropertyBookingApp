import React from "react";
import classes from "./Button.module.css";

function Button(props) {
  return (
    <>
      <button className={`btn btn--${props?.type}`}>{props.text}</button>
    </>
  );
}

export default Button;
