import { useEffect, useState } from "react";

export function clearObject(object: object) {
  const result: object = {};
  Object.keys(object).forEach((key: string) => {
    //@ts-ignore
    const value = object[key];
    if (value || value === 0) {
      // @ts-ignore
      result[key] = value;
    }
  });
  return result;
}

export function useMount(callback: () => void) {
  useEffect(() => {
    return callback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

export function useDebounce<V>(value: V, delay: number = 200) {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay, value]);

  return debounceValue;
}
