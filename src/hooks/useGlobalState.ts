import { useContext } from 'react';
import { stateCtx } from '../components/contexts/state';
import { State } from '../store';

const useGlobalState = <K extends keyof State>(key: K) => {
  const state = useContext(stateCtx);
  return state[key];
};

export default useGlobalState;
