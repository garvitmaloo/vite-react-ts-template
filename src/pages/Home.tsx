import React from "react";

import useAppSelector from "../hooks/useAppSelector";
import useAppDispatch from "../hooks/useAppDispatch";
import { counterActions } from "../store/actions";

const Home = () => {
  const counterState = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  const handleIncreaseByOne = () => {
    dispatch(counterActions.increaseByOne());
  };

  const handleDecreaseByOne = () => {
    dispatch(counterActions.decreaseByOne());
  };

  const handleIncreaseByNumber = (num: number) => {
    dispatch(counterActions.increaseByNumber({ number: num }));
  };

  return (
    <div>
      <h1>Home Page</h1>

      <h1>Count</h1>
      <p>{counterState}</p>
      <button onClick={handleIncreaseByOne}>Increase by 1</button>
      <button onClick={handleDecreaseByOne}>Decrease by 1</button>
      <input
        placeholder='Increase by number...'
        type='number'
        onChange={(e) => handleIncreaseByNumber(Number(e.target.value))}
      />
    </div>
  );
};

export default Home;
