import {useEffect, useRef} from "react";

// ! Only run when update, not run in first render
function useOnlyUpdateEffect(effect, dependencyArray = []) {
  const isInitialMount = useRef(true);
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      return effect();
    }
  }, dependencyArray);
}

// ! Only run in first render, not when update
function useOnlyInitialEffect(effect) {
  useEffect(effect, []);
}

// ! Run in first render and when update
function useNormalEffect(effect, dependencyArray) {
  return useEffect(effect, dependencyArray);
}

export {useOnlyUpdateEffect, useOnlyInitialEffect, useNormalEffect};
