import { useEffect } from 'react';
import GoogleAnalytics from 'react-ga';
import { RouteComponentProps } from 'react-router';

// a hook to track a page view in Google Analytics
export default function usePageView(location: RouteComponentProps['location'], options?: object) {
  const page = location.pathname + location.search;
  return useEffect(() => {
    GoogleAnalytics.set({
      page,
      ...options,
    });
    GoogleAnalytics.pageview(page);
  }, [page, options]); // only track the page once per mount
}
