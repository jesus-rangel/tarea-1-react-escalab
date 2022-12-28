import React from "react";
import s from "./style.module.css";
import MenuListItem from "../MenuListItem/MenuListItem";
import { COLORS } from "./constant";

const MenuList = (props) => {
  return (
    <div className={s.container}>
      {COLORS.map((color) => (
        <MenuListItem
          key={color}
          isSelected={props.color === color}
          onClick={props.onItemClick}
          color={color}
        />
      ))}
    </div>
  );
};

export default MenuList;
