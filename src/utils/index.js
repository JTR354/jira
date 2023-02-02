import { useEffect, useState } from "react";

export function clearObject(object) {
  const result = {};
  Object.keys(object).forEach((key) => {
    const value = object[key];
    if (value || value === 0) {
      result[key] = value;
    }
  });
  return result;
}

export function useMount(callback) {
  useEffect(() => {
    return callback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

export function useDebounce(value, delay = 1e3) {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay, value]);

  return debounceValue;
}
