import React, { createContext, useEffect, useReducer, useState } from "react";
import { initialState, reducer } from "../reducer/reducer";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const getData = async (page) => {
      console.log(page, "called 1234");
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_start=${
          (page - 1) * 10
        }&_limit=10`
      );
      const data = await response.json();

      dispatch({ type: "FETCH_DATA_SUCCESSFULLY", payload: data });
    };

    getData(currentPage);
  }, [currentPage]);

  return (
    <PostContext.Provider
      value={{ state, dispatch, currentPage, setCurrentPage }}
    >
      {children}
    </PostContext.Provider>
  );
};
