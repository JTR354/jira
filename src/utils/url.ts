import { URLSearchParamsInit, useSearchParams } from "react-router-dom";
import { useEffect, useMemo } from "react";

export const useUrlQueryParam = (keys: URLSearchParamsInit) => {
  const [searchParams, setSearchParams] = useSearchParams(keys);
  // useEffect(() => {
  //   // console.log(searchParams.get("personId"));
  //   // setSearchParams({ name: "万", personId: "1" });
  //   const o = searchParams.values();
  //   console.log(o);
  //   debugger;
  // }, []);

  const result = useMemo(() => {
    const r: { [key: string]: unknown } = {};
    Object.keys(keys).forEach((k: string) => {
      const v = searchParams.get(k);
      if (v) {
        r[k] = v;
      }
    });
    return r;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  return [result, setSearchParams];
};
