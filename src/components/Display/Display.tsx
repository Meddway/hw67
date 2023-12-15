import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../../app/store";

const Display: React.FC = () => {
  const values = useSelector((state: RootState) => state.calculator.values);

  return (
    <div className="display">
      {values}
    </div>
  );
};

export default Display;