import axios from "axios";
import { takeLatest, put, call } from "redux-saga/effects";
import { registerUsersFail, registerUsersSuccess } from "../Action";

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
