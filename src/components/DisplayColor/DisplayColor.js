import React, { useState } from "react";
import s from "./style.module.css";

const DisplayColor = (props) => {
  return (
    <div className={s.container}>
      {props.color ? `Color set to ${props.color}` : "No color set"}
    </div>
  );
};

export default DisplayColor;
