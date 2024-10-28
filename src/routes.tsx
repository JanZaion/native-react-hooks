import type { RouteObject } from "react-router-dom";
import { UseRef } from "./nativeHooks/UseRef.tsx";
import { UseState } from "./nativeHooks/UseState.tsx";
import { UseActionState } from "./nativeHooks/UseActionState.tsx";
import { UseCallback } from "./nativeHooks/UseCallback.tsx";
import { UseInsertionEffect } from "./nativeHooks/UseInsertionEffect.tsx";
import { UseImperativeHandle } from "./nativeHooks/UseImperativeHandle.tsx";
import { UseContext } from "./nativeHooks/UseContext.tsx";
import { UseDebugValue } from "./nativeHooks/UseDebugValue.tsx";
import { UseEffect } from "./nativeHooks/UseEffect.tsx";
import { UseId } from "./nativeHooks/UseId.tsx";
import { UseLayoutEffect } from "./nativeHooks/UseLayoutEffect.tsx";
import { UseMemo } from "./nativeHooks/UseMemo.tsx";
import { UseOptimistic } from "./nativeHooks/UseOptimistic.tsx";
import { UseReducer } from "./nativeHooks/UseReducer.tsx";
import { UseSyncExternalStore } from "./nativeHooks/UseSyncExternalStore.tsx";
import { UseTransition } from "./nativeHooks/UseTransition.tsx";

export const routes: RouteObject[] = [
  { path: "useActionState", element: <UseActionState /> },
  { path: "useCallback", element: <UseCallback /> },
  { path: "useContext", element: <UseContext /> },
  { path: "useDebugValue", element: <UseDebugValue /> },
  { path: "useEffect", element: <UseEffect /> },
  { path: "useId", element: <UseId /> },
  { path: "useImperativeHandle", element: <UseImperativeHandle /> },
  { path: "useInsertionEffect", element: <UseInsertionEffect /> },
  { path: "useLayoutEffect", element: <UseLayoutEffect /> },
  { path: "useMemo", element: <UseMemo /> },
  { path: "useOptimistic", element: <UseOptimistic /> },
  { path: "useReducer", element: <UseReducer /> },
  { path: "useRef", element: <UseRef /> },
  { path: "useState", element: <UseState /> },
  { path: "useSyncExternalStore", element: <UseSyncExternalStore /> },
  { path: "useTransition", element: <UseTransition /> },
];
