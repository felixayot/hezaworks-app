import { useContext } from 'react'
import JobcartContext from '../context/JobcartContext'

function useJobcart() {
  return useContext(JobcartContext)
}

export default useJobcart
