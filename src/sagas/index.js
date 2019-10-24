import { takeLatest } from "redux-saga/effects";
import axios from "axios";

import getIp from "./ip";
import getUa from "./ua";

function* index() {
  yield takeLatest("LOAD_DATA_REQUEST", getIp, axios);
  yield takeLatest("LOAD_DATA_UA_REQUEST", getUa, axios);
}

export default index;
