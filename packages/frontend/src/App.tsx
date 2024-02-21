import { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from '~/routes.tsx';
import posthog from 'posthog-js';

const App = () => {
  const router = createBrowserRouter([...routes]);
  const params = new URLSearchParams(window.location.search);

  useEffect(() => {
    const phid = params.get('phid');
    console.log('phid', phid);

    posthog.identify(phid ?? undefined);
  }, []);

  return <RouterProvider router={router} />;
};

export default App;
