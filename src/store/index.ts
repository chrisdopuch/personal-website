export const isDarkModeKey = 'isDarkMode';

export const getPersistedIsDarkMode = () => {
  const persistedIsDarkMode = localStorage.getItem(isDarkModeKey);
  return persistedIsDarkMode !== null ? persistedIsDarkMode === 'true' : false;
};

export const initialState = {
  isDarkMode: getPersistedIsDarkMode(),
  isNavDrawerOpen: false,
};

export type State = typeof initialState;

// Todo: try making these Symbols or Enums?
export type Action =
  | { type: 'toggleDarkMode' }
  | { type: 'setDarkMode'; payload: boolean }
  | { type: 'toggleNavDrawerOpen' }
  | { type: 'setNavDrawerOpen'; payload: boolean };

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'toggleDarkMode':
      return {
        ...state,
        isDarkMode: !state.isDarkMode,
      };
    case 'setDarkMode':
      return {
        ...state,
        isDarkMode: action.payload,
      };
    case 'toggleNavDrawerOpen':
      return {
        ...state,
        isNavDrawerOpen: !state.isNavDrawerOpen,
      };
    case 'setNavDrawerOpen':
      return {
        ...state,
        isNavDrawerOpen: action.payload,
      };
    default:
      return state;
  }
};
