import CONSTANTS from './constants';

const initialState = {
  data: undefined,
  fetchDataRequestStatus: undefined,
};

const hotelReducer = (state = initialState, action) => {
  const { payload, type } = action;
  let newState;

  switch (type) {
    case CONSTANTS.FETCH_DATA:
    case CONSTANTS.FETCH_DATA_SUCCESS:
    case CONSTANTS.FETCH_DATA_PENDING:
    case CONSTANTS.FETCH_DATA_FAIL:
      newState = { ...state, ...payload };
      break;

    default:
      newState = state;
      break;
  }

  return newState;
};

export default hotelReducer;
