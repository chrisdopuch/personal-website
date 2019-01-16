import { createStore } from 'react-hookstore';

export interface IAppStore {
  isNavDrawerOpen: boolean;
  isDarkMode: boolean;
}

export const isDarkModeKey = 'isDarkMode';

export const initializeStore = () => {
  const persistedIsDarkMode = localStorage.getItem(isDarkModeKey);

  const initialStore: IAppStore = {
    isDarkMode: persistedIsDarkMode !== null ? persistedIsDarkMode === 'true' : false,
    isNavDrawerOpen: false,
  };

  // initialize the global hook store
  createStore('appStore', initialStore);
};
