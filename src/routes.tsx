import type { RouteObject } from "react-router-dom";
import { UseRef } from "./nativeHooks/UseRef.tsx";
import { UseState } from "./nativeHooks/UseState.tsx";

export const routes: RouteObject[] = [
  { path: "useRef", element: <UseRef /> },
  { path: "useState", element: <UseState /> },
];
