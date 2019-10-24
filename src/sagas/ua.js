import { put } from "redux-saga/effects";

import { loadDataUaResponse } from "../store/reducers/actions";

function* getUa(axios) {
  const dados = yield axios.get("http://httpbin.org/user-agent");
  yield put(loadDataUaResponse(dados.data["user-agent"]));
}

export default getUa;
