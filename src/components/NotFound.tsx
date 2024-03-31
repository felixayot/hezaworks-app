import { useNavigate } from 'react-router-dom'
import { ErrorpageButton, ErrorpageContainer, ErrorpageText, ErrorpageTitle } from '../styles/ErrorPage.styles'

function NotFound() {
  const navigate = useNavigate()
  const handleRedirect = () => navigate(-1)
  return (
    <ErrorpageContainer style={{ height: '60vh' }}>
        <ErrorpageTitle>Oops! Page Not Found</ErrorpageTitle>
        <ErrorpageText>Please try accessing another page,</ErrorpageText>
        <ErrorpageText>Or</ErrorpageText>
        <ErrorpageButton onClick={handleRedirect}>Go back</ErrorpageButton>
        <br />
    </ErrorpageContainer>
  )
}

export default NotFound
