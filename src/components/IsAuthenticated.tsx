import useAuth from "../hooks/useAuth";

function IsAuthenticated() {
  const { auth } = useAuth();
  // if (auth?.username) {
  //   console.log(auth?.username);
  // }
  return (
    auth?.AccessToken ? true : null
);
}

export default IsAuthenticated;
