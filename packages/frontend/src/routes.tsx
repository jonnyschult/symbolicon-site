import type { RouteObject } from 'react-router-dom';
import ErrorPage from '~/shared/components/ErrorPage';
import Layers from '~/modules/layers/Layers';
import ErgoPositions from './modules/ergoPositions/ErgoPositions';

const routes: RouteObject[] = [
  {
    path: 'ergo',
    element: <ErgoPositions />,
  },
  {
    path: '*',
    element: <Layers />,
    errorElement: <ErrorPage />,
  },
];

export { routes };
