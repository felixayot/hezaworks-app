import useAuth from "../hooks/useAuth";

function IsAuthenticated() {
  const { auth } = useAuth();

  return (
    auth?.username ? true : null
);
}

export default IsAuthenticated;
