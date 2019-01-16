import { Location } from 'history';
import { useEffect } from 'react';
import GoogleAnalytics from 'react-ga';
import usePageView from './usePageView';

jest.mock('react', () => {
  return {
    useEffect: jest.fn(),
  };
});

jest.mock('react-ga', () => {
  return {
    pageview: jest.fn(),
    set: jest.fn(),
  };
});

describe('usePageView', () => {
  beforeEach(() => {
    (useEffect as jest.Mock).mockReset();
    (GoogleAnalytics.set as jest.Mock).mockReset();
    (GoogleAnalytics.pageview as jest.Mock).mockReset();
  });

  it('should call useEffect', () => {
    const location = {
      pathname: '/foo',
      search: '?bar=0',
    } as Location;

    usePageView(location);

    expect(useEffect).toBeCalled();
    expect((useEffect as jest.Mock).mock.calls[0][1]).toEqual([location.pathname + location.search]);
  });

  it('should pass a callback that calls into Google Analytics', () => {
    const location = {
      pathname: '/foo',
      search: '?bar=0',
    } as Location;
    const page = location.pathname + location.search;

    usePageView(location);
    const callback = (useEffect as jest.Mock).mock.calls[0][0];
    callback();

    expect(GoogleAnalytics.set).toBeCalledWith({
      page,
    });
    expect(GoogleAnalytics.pageview).toBeCalledWith(page);
  });

  it('should forward options to Google Analytics', () => {
    const location = {
      pathname: '/foo',
      search: '?bar=0',
    } as Location;
    const page = location.pathname + location.search;
    const options = { thing: 'stuff' };

    usePageView(location, options);
    const callback = (useEffect as jest.Mock).mock.calls[0][0];
    callback();

    expect(GoogleAnalytics.set).toBeCalledWith({
      page,
      ...options,
    });
    expect(GoogleAnalytics.pageview).toBeCalledWith(page);
  });
});
