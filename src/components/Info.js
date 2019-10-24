import React from "react";
import { connect } from "react-redux";

import { loadDataRequest } from "../store/reducers/actions";

const Info = ({ loadDataRequest, data, isFetching }) => {
  return (
    <div>
      <h1>Informações</h1>
      {!isFetching && <button onClick={() => loadDataRequest()}>Ver IP</button>}
      {isFetching && <span>Carregando...</span>}
      <h3>
        IP: <strong>{data}</strong>
      </h3>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isFetching: state.ip.isFetching,
    data: state.ip.data,
    error: state.ip.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadDataRequest: () => dispatch(loadDataRequest())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Info);
