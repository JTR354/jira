import { useEffect, useRef, useState } from "react";

type EmptyObject = { [key: string]: unknown };
export function clearObject(object?: EmptyObject) {
  if (!object) return {};
  const result: EmptyObject = {};
  Object.keys(object).forEach((key: string) => {
    const value = object[key];
    if (value || value === 0) {
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

export const useDocumentTitle = (title: string, resize: boolean = true) => {
  const oldTitle = useRef(document.title).current;

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    return () => {
      if (resize) {
        document.title = oldTitle;
      }
    };
  }, [resize, oldTitle]);
};
