import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import {
  createBrowserRouter,
  Link,
  RouterProvider,
} from "react-router-dom";
import { routes } from "./routes.tsx";

export const Root = () => (
  <ul>
    {routes.map((route) => (
      <li key={route.path}>
        <Link to={`/${route.path}`}>{route.path}</Link>
      </li>
    ))}
  </ul>
);

const router = createBrowserRouter([
  { path: "/", element: <Root /> },
  ...routes,
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <a href="/">{`<-- Reset`}</a>
    <div>
      <RouterProvider router={router} />
    </div>
  </StrictMode>,
);
