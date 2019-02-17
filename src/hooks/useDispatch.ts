import { useContext } from 'react';
import { dispatchCtx } from '../components/contexts/state';

const useDispatch = () => {
  return useContext(dispatchCtx);
};

export default useDispatch;
