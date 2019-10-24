import React from "react";
import { connect } from "react-redux";

import { loadDataUaRequest } from "../store/reducers/actions";

const UserAgent = ({ loadDataUaRequest, data, isFetching }) => {
  return (
    <div>
      {!isFetching && (
        <button onClick={() => loadDataUaRequest()}>Ver UA</button>
      )}
      {isFetching && <span>Carregando...</span>}
      <h3>
        User Agent: <strong>{data}</strong>
      </h3>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isFetching: state.ua.isFetching,
    data: state.ua.data,
    error: state.ua.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadDataUaRequest: () => dispatch(loadDataUaRequest())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserAgent);
