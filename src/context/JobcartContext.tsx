/* eslint-disable */
// @ts-nocheck

import { createContext, useState } from "react";

const JobcartContext = createContext({});

export function JobcartProvider({ children }) {
  const [ jobcart, setJobcart ] = useState([]);

  return (
    <JobcartContext.Provider value={{ jobcart, setJobcart }}>
      { children }
    </JobcartContext.Provider>
  );
}

export default JobcartContext;
