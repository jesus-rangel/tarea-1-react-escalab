import { useState } from "react";
import "./App.css";
import s from "./style.module.css";
import DisplayColor from "./components/DisplayColor/DisplayColor";
import MenuList from "./components/MenuList/MenuList";

function App() {
  const [currentColor, setCurrentColor] = useState("");

  const onMenuListItemClick = (color) => {
    setCurrentColor(color);
  };
  return (
    <div className={s.workspace} style={{ backgroundColor: currentColor }}>
      <h1 style={{ textAlign: "center" }}>Select your color</h1>
      <div>
        <MenuList color={currentColor} onItemClick={onMenuListItemClick} />
        <DisplayColor color={currentColor} />
      </div>
    </div>
  );
}

export default App;
