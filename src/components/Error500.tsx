/* eslint-disable */
// @ts-nocheck

import { ErrorpageButton, ErrorpageContainer, ErrorpageText, ErrorpageTitle } from "../styles/ErrorPage.styles"

function Error500() {
  function handleReload() {
    window.location.reload()
      }

  return (
    <ErrorpageContainer>
        <ErrorpageTitle>Something went wrong!</ErrorpageTitle>
        <ErrorpageText>Sorry, we are experiencing some technical difficulties.
        Please try again later.
        </ErrorpageText>
        <ErrorpageButton onClick={handleReload}>Refresh</ErrorpageButton>
    </ErrorpageContainer>
  )
}

export default Error500;
