import React from "react";

const MultiDivide = (props) => {
  return (
    <div>
      <button onClick={() => props.multiply(4)}>*</button>
      <span>{props.counter}</span>
      <button onClick={() => props.divide(4)}>/</button>
    </div>
  );
};
export default MultiDivide;
