import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const decrement = () => {
    setCount(count > 0 ? count - 1 : 0);
  };

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Tæller: {count} </h1>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Counter;
