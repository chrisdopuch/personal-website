import React from 'react';
import { render } from 'react-dom';
import GoogleAnalytics from 'react-ga';
import App from './components/App';
import { StateProvider } from './components/contexts/state';
import './index';
import registerServiceWorker from './registerServiceWorker';

jest.mock('react-dom', () => {
  return {
    render: jest.fn(),
  };
});

jest.mock('./registerServiceWorker', () => {
  return jest.fn();
});

jest.mock('react-ga', () => {
  return {
    initialize: jest.fn(),
  };
});

describe('index', () => {
  it('should render', () => {
    expect(render).toBeCalledWith(
      <StateProvider>
        <App title="Dev: Chris Dopuch Devs" />
      </StateProvider>,
      null
    );
  });

  it('should register service worker', () => {
    expect(registerServiceWorker).toBeCalled();
  });

  it('should register Google Analytics', () => {
    expect(GoogleAnalytics.initialize).toBeCalledWith('UA-128558512-1', { testMode: true });
  });
});
