import { useContext } from 'react';
import useGlobalState from './useGlobalState';

jest.mock('../components/contexts/state');
jest.mock('../store');
jest.mock('react', () => {
  return {
    createContext: jest.fn(),
    useContext: jest.fn(),
  };
});

describe('useGlobalState', () => {
  it('should return the key of state from context', () => {
    const state = {
      isNavDrawerOpen: 'bar',
    };
    (useContext as jest.Mock).mockImplementationOnce(() => state);

    expect(useGlobalState('isNavDrawerOpen')).toEqual(state.isNavDrawerOpen);
  });
});
