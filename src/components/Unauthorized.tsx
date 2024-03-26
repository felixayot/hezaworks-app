import { useNavigate } from 'react-router-dom'
import { ErrorpageButton, ErrorpageContainer, ErrorpageText, ErrorpageTitle } from '../styles/ErrorPage.styles'

function Unauthorized() {
  const navigate = useNavigate()
  const handleRedirect = () => navigate(-1)
  return (
    <ErrorpageContainer>
        <ErrorpageTitle>Unauthorized</ErrorpageTitle>
        <ErrorpageText>You are not authorized to access this page.</ErrorpageText>
        <ErrorpageButton onClick={handleRedirect}>Go back</ErrorpageButton>
    </ErrorpageContainer>
  )
}

export default Unauthorized
