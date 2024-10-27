import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import { UseState } from './nativeHooks/UseState.tsx';
import { UseRef } from './nativeHooks/UseRef.tsx';

export const Root = () => (
  <ul>
    <li>
      <Link to={'/useState'}>useState</Link>
    </li>
    <li>
      <Link to={'/useRef'}>useRef</Link>
    </li>
  </ul>
);

const router = createBrowserRouter([
  { path: '/', element: <Root /> },
  { path: '/useState', element: <UseState /> },
  { path: '/useRef', element: <UseRef /> },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <a href="/">{`<-- Home`}</a>
    <RouterProvider router={router} />
  </StrictMode>
);
