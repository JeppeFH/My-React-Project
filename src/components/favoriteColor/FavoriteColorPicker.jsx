import { useState } from "react";
import FavoriteColorDisplay from "./FavoriteColorDisplay";

const FavoriteColorPicker = () => {
  const [colorway, setColor] = useState("");

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <>
      <h2>Vælg din favoritfarve: </h2>
      <select value={colorway} onChange={handleColorChange}>
        <option value="red">Rød</option>
        <option value="blue">Blå</option>
        <option value="green">Grøn</option>
        <option value="yellow">Gul</option>
      </select>

      <FavoriteColorDisplay color={colorway} />
    </>
  );
};

export default FavoriteColorPicker;
