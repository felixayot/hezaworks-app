import { Outlet } from "react-router-dom";
import { GlobalStyles } from "../styles/GlobalStyles.tsx";

function Layout() {
  return (
    <GlobalStyles>
        <Outlet />
    </GlobalStyles>
  )
}

export default Layout
