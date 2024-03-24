import useAuth from "../hooks/useAuth";

function LoggedIn() {
  const { auth } = useAuth();

  return (
    auth?.username
    ? true : false
);
}

export default LoggedIn;
