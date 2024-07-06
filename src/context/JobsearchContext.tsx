/* eslint-disable */
// @ts-nocheck

import { createContext, useState } from 'react'

export const JobsearchContext = createContext({});

export function JobsearchProvider({ children }) {
    const [ results, setResults ] = useState([]);
  
    return (
      <JobsearchContext.Provider value={{ results, setResults }}>
        { children }
      </JobsearchContext.Provider>
    );
  }
