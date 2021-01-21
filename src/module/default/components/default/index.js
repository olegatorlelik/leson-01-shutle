import React from "react";
import PlusMinus from "../counterMinusPlus/index";
import MultiDivide from "../counterMultiDivide/index";
const Default = (props) => {
  return (
    <div>
      <button onClick={props.showBoxMinusPlus}> + - </button>
      <button onClick={props.showBoxMultiDivide}> * / </button>
      {props.data ? (
        <PlusMinus
          increment={props.increment}
          decrement={props.decrement}
          counter={props.countPlusMinus}
        />
      ) : (
        <MultiDivide
          multiply={props.multiply}
          divide={props.divide}
          counter={props.counterMultiDivide}
        />
      )}
    </div>
  );
};

export default Default;
