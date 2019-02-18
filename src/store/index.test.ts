import { Action, getPersistedIsDarkMode, initialState, reducer } from './index';

describe('Store index', () => {
  describe('reducer', () => {
    it('should handle the default case', () => {
      const state = initialState;

      const newState = reducer(state, {} as Action);

      expect(newState).toEqual(state);
    });

    it('should handle the `toggleDarkMode` action', () => {
      const state = initialState;

      const newState = reducer(state, { type: 'toggleDarkMode' });

      expect(newState).toEqual({ ...state, isDarkMode: !state.isDarkMode });
    });

    it('should handle the `setDarkMode` action', () => {
      const state = initialState;
      const payload = true;

      const newState = reducer(state, { type: 'setDarkMode', payload });

      expect(newState).toEqual({ ...state, isDarkMode: payload });
    });

    it('should handle the `toggleNavDrawerOpen` action', () => {
      const state = initialState;

      const newState = reducer(state, { type: 'toggleNavDrawerOpen' });

      expect(newState).toEqual({ ...state, isNavDrawerOpen: !state.isNavDrawerOpen });
    });

    it('should handle the `setNavDrawerOpen` action', () => {
      const state = initialState;
      const payload = true;

      const newState = reducer(state, { type: 'setNavDrawerOpen', payload });

      expect(newState).toEqual({ ...state, isNavDrawerOpen: payload });
    });
  });

  describe('getPersistedIsNavDrawerOpen', () => {
    it('should default to false', () => {
      expect(getPersistedIsDarkMode()).toEqual(false);
    });
  });
});
