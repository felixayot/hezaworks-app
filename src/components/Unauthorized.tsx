import React from 'react'
import { useNavigate } from 'react-router-dom'

function Unauthorized() {
  const navigate = useNavigate()
  const handleRedirect = () => navigate(-1)
  return (
    <section>
        <h2>Unauthorized</h2>
        <p>You are not authorized to access this page.</p>
        <div className="flexGrow">
        <button onClick={handleRedirect}>Go back</button>
        </div>
        <br />
    </section>
  )
}

export default Unauthorized
