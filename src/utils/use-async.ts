import { useState } from "react";

enum STAT {
  idle = "idle",
  loading = "loading",
  success = "success",
  error = "error",
}

interface State<D> {
  data: D | undefined | undefined;
  error: Error | undefined;
  stat: STAT;
}

const defaultInitStat: State<undefined> = {
  data: undefined,
  error: undefined,
  stat: STAT.idle,
};

export const useAsync = <D>(initStat?: State<D>) => {
  const [state, setState] = useState({
    ...defaultInitStat,
    ...initStat,
  });

  const setData = (data: D) => {
    setState({
      data,
      error: undefined,
      stat: STAT.success,
    });
  };

  const setError = (error: Error) => {
    setState({
      data: undefined,
      error,
      stat: STAT.error,
    });
  };

  const run = (promise: Promise<D>) => {
    setState((s) => ({ ...s, stat: STAT.loading }));
    if (!promise || !promise.then) {
      throw new Error("pls input an promise");
    }
    return promise
      .then((data) => {
        setData(data);
        return data;
      })
      .catch((error) => {
        setError(error);
        return error;
      });
  };
  return {
    setData,
    setError,
    run,
    setState,
    isLoading: STAT.loading === state.stat,
    isIdle: STAT.idle === state.stat,
    isSuccess: STAT.success === state.stat,
    isError: STAT.error === state.stat,
    ...state,
  };
};
