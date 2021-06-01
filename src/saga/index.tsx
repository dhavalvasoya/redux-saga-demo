import axios from "axios";
import { takeLatest, put, call } from "redux-saga/effects";
import {
  loginUserFail,
  loginUserSuccess,
  registerUsersFail,
  registerUsersSuccess,
} from "../Action";

//== register saga function ==\\
export const loadPostApi = async (data: any) =>
  await axios.post(`http://localhost:3003/userData`, data);

export function* onLoadPostStartAsync(data: any): any {
  try {
    const response = yield call(() => loadPostApi(data.payload));
    yield put(registerUsersSuccess(response.data));
  } catch (error) {
    yield put(registerUsersFail(error));
  }
}
export function* onLoadPost() {
  yield takeLatest("LOAD_POST_START", onLoadPostStartAsync);
}

//login data compare
export const loadLoginApi = async (data: any) =>
  await axios.get(`http://localhost:3003/userData`);

export function* onLoadLoginAsync(data: any): any {
  try {
    const response = yield call(() => loadLoginApi(data));
    const user = response.data;
    let data1 = data.payload;
    let loginUserData = yield user.find(
      (value: any) =>
        value.email === data1.email && value.password === data1.password
    );
    if (loginUserData) {
      localStorage.setItem("login", JSON.stringify(true));
      localStorage.setItem("user", JSON.stringify(loginUserData));
    }

    yield put(loginUserSuccess(response.data));
  } catch (error) {
    yield put(loginUserFail(error));
  }
}
export function* onLoginUser() {
  yield takeLatest("LOGIN_USER_REQUSET", onLoadLoginAsync);
}
