import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section>
        <h2>Oops! Page Not Found.</h2>
        <p>Please try accessing another page, maybe <Link to='home'>home</Link></p>
    </section>
  )
}

export default NotFound
