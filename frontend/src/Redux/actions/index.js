import { signin } from "../../APIs/authApi";

export const handleSignIn = (payload) => {
  console.log("pa",payload);
  return (dispatch) => {
    signin(payload)
      .then((response) => {
        dispatch({ type: "SIGNIN", payload: response });
      })
      .catch((err) => {
        console.log("errr", err);
      });
  };
};

export const handleLogout = () => {
  localStorage.removeItem('token');
  sessionStorage.removeItem('auth')
  return { type: 'LOGOUT' };
};