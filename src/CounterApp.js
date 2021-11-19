import React, { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value = 0 }) => {
  const [counter, setCounter] = useState(0);

  //handleAdd
  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleReset = () => {
    setCounter(value);
  };

  const handleRest = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleRest}>-1</button>
    </>
  );
};

CounterApp.propTypes = {
  values: PropTypes.number.isRequired,
};

CounterApp.defaultProps = {
  values: 10,
};

export default CounterApp;
