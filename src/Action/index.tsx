export const registerUsersRequest = (userData: any) => ({
  type: "LOAD_POST_START",
  payload: userData,
});
export const registerUsersSuccess = (userData: any) => ({
  type: "LOAD_POST_SUCCESS",
  payload: userData,
});
export const registerUsersFail = (errors: any) => ({
  type: "LOAD_POST_FAIL",
  payload: errors,
});

export const loginUserRequset = (loginData: any ) => ({
  type: "LOGIN_USER_REQUSET",
  payload: loginData,
});
export const loginUserSuccess = (loginData: any) => ({
  type: "LOGIN_USER_SUCCESS",
  payload: loginData,
});
export const loginUserFail = (error: any) => ({
  type: "LOGIN_USER_FAIL",
  payload: error,
});
