// IP
export const loadDataRequest = () => {
  return {
    type: "LOAD_DATA_REQUEST"
  };
};

export const loadDataResponse = data => {
  return {
    type: "LOAD_DATA_RESPONSE",
    data
  };
};

// UA
export const loadDataUaRequest = () => {
  return {
    type: "LOAD_DATA_UA_REQUEST"
  };
};

export const loadDataUaResponse = data => {
  return {
    type: "LOAD_DATA_UA_RESPONSE",
    data
  };
};
