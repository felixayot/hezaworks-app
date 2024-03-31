import { Outlet } from 'react-router-dom'
import { useEffect } from 'react'

function HomePage() {

  useEffect(() => {
    document.title = 'HezaWorks - Home Page'
  }
  , [])

  return (
    <>
    <Outlet />
    <div>
    <h2>HezaWorks Home Page</h2>
    <p>Find talent and get hired for your talent</p>
    <p></p>
     </div>
     </>
  )
}

export default HomePage
