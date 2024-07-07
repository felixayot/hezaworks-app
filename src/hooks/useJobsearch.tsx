import { useContext } from 'react'
import { JobsearchContext } from '../context/JobsearchContext'
function useJobsearch() {
  return useContext(JobsearchContext)
}

export default useJobsearch
