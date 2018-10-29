import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
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

describe('index', () => {
  it('should render', () => {
    expect(render).toBeCalledWith(<App title="The Chris Dopuch Zone" />, null);
  });

  it('should register service worker', () => {
    expect(registerServiceWorker).toBeCalled();
  });
});
