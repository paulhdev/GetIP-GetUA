import { put } from "redux-saga/effects";

import { loadDataResponse } from "../store/reducers/actions";

function* getIp(axios) {
  const dados = yield axios.get("http://httpbin.org/ip");
  yield put(loadDataResponse(dados.data.origin));
}

export default getIp;
