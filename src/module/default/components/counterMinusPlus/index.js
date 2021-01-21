import React from "react";

const PlusMinus = (props) => {
  return (
    <div>
      <button onClick={() => props.increment(1)}>+</button>
      <span>{props.counter}</span>
      <button onClick={() => props.decrement(1)}>-</button>
    </div>
  );
};
export default PlusMinus;
