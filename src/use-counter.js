import { useSelector } from 'react-redux';

import { increment, decrement, set } from './actions';
import { useActions } from './use-actions';

export const useCounter = () => {
  const count = useSelector((state) => state.count);
  const actions = useActions({ increment, decrement, set });

  return { count, ...actions };
};
