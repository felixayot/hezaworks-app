/* eslint-disable */
// @ts-nocheck

import useAxiosPrivate from "../hooks/UseAxiosPrivate";
import { HomeButton, HomeLink } from "../styles/HomePage.styles";
import { PageLoadingWrapper, PageSuccess } from "../styles/PageLoading.styles";
import PublicNavbar from "./PublicNavbar";

const LOGOUT_URL = "/auth/logout";

function Logout() {
  const privateAxios = useAxiosPrivate();
  // const location = useLocation();

  privateAxios.post(LOGOUT_URL, { withCredentials: true });

  return (
    <>
    {/* <PublicNavbar /> */}
  <PageLoadingWrapper>
    <PageSuccess>You've been logged out successfully.</PageSuccess><br />
    <HomeButton><HomeLink to="/">Home</HomeLink></HomeButton>
  </PageLoadingWrapper>
  </>
  );
}

export default Logout;
