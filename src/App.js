import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";

import reducers from "./store/reducers";
import indexSaga from "./sagas";

import Info from "./components/Info";
import UserAgent from "./components/UserAgent";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(indexSaga);

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Redux Saga</h1>
        <Info />
        <UserAgent />
      </div>
    </Provider>
  );
}

export default App;
