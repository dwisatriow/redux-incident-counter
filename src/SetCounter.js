import { useEffect, useState } from 'react';
import { useCounter } from './use-counter';

export const SetCounter = () => {
  const { count: countFromStore, set } = useCounter();
  const [count, setCount] = useState(countFromStore);

  useEffect(() => {
    setCount(countFromStore);
  }, [countFromStore]);

  return (
    <section className="controls">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          set(count);
        }}
      >
        <label htmlFor="set-to">Set Count</label>
        <input
          id="set-to"
          type="number"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <input type="submit" />
      </form>
    </section>
  );
};
