import { useState } from "react";

const ToggleText = () => {
  const [isVisible, setIsvisible] = useState(true);

  const toggleVisibility = () => {
    setIsvisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>Vis/skjul tekst</button>
      {isVisible && <p>Hej, React!</p>}
    </div>
  );
};

export default ToggleText;
