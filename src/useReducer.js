import { useEffect, useState } from "react";

export default function useReducer(
  reducer,
  initialState,
  stateInitializer = undefined
) {
  const [state, setState] = useState(
    stateInitializer ? stateInitializer(initialState) : initialState
  );
  const [dispatchState, dispatchCallback] = useState();

  useEffect(() => {
    if (!dispatchState) return;
    const reducedState = reducer(state, dispatchState);
    setState(reducedState);
  }, [dispatchState, reducer]);

  return [state, dispatchCallback];
}
