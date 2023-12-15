import React from 'react';
import {useDispatch} from "react-redux";
import {addNumber, addOperator, reset,calculate} from "../../containers/Calculator/calculatorSlice";

const Keyboard: React.FC = () => {
  const dispatch = useDispatch();

  const buttons = ['1', '2', '3', '4', '5', '6', '7', '8', '9','0', 'C', '=', '+','-', '*','/'];

  const clickButton = (value: string) => {
    if(value === '='){
      dispatch(calculate());
    }else if (value === 'C') {
      dispatch(reset());
    } else if (['+','-', '*','/'].includes(value) ) {
      dispatch(addOperator(value));
    } else {
      dispatch(addNumber(value));
    }
  };

  const renderButton = (value: string) => (
    <button key={value} onClick={() => clickButton(value)}>
      {value}
    </button>
  );

  return (
    <div className= "btn">
      {buttons.map(renderButton)}
    </div>
  );
};

export default Keyboard;