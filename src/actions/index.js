export const isLogged = () => {
  return {
    type: "LOGIN_SUCCESS",
  };
};
export const isLoggedOut = () => {
  return {
    type: "LOGOUT",
  };
};
// It will execute the switch case of the reducers
//Dispatch will be helpful to call these functions of the actions
