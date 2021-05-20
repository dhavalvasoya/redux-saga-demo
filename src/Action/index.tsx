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
