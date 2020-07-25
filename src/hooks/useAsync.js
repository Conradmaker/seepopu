import { useEffect, useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "LOADING":
      return { loading: true, data: null, error: null };
    case "SUCCESS":
      return { loading: false, data: action.data, error: null };
    case "ERROR":
      return { loading: false, data: null, error: action.error };
    default:
      return state;
  }
}

export default function useAsync(callBack, deps = []) {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: null,
  });

  const fetchData = async () => {
    dispatch({ type: "LOADING" });
    try {
      const data = await callBack();
      dispatch({ type: "SUCCESS", data });
    } catch (e) {
      dispatch({ type: "ERROR", error: e });
    }
  };

  useEffect(() => {
    fetchData();
    //eslint-disable-next-line
  }, deps);

  return [state, fetchData];
}
