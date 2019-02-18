import useDispatch from './useDispatch';

jest.mock('../components/contexts/state');
jest.mock('../store');
jest.mock('react', () => {
  return {
    createContext: jest.fn(),
    useContext: jest.fn(() => 'dispatchCtx'),
  };
});

describe('useDispatch', () => {
  it('should return the dispatch context', () => {
    expect(useDispatch()).toEqual('dispatchCtx');
  });
});
