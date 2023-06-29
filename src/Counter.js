import { useDispatch, useSelector } from 'react-redux';

import { SetCounter } from './SetCounter';
import { decrement, increment, set } from './actions';

export const Counter = () => {
  const incident = 'Coffe Spill';
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <main className="Counter">
      <h1>Days Since Last {incident}</h1>
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(set(0))}>Reset</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </section>
      <SetCounter />
    </main>
  );
};

export default Counter;
