import HotelsApi from './api';
import CONSTANTS from './constants';

const fetchDataSuccess = data => ({
  type: CONSTANTS.FETCH_DATA_SUCCESS,
  payload: {
    fetchDataRequestStatus: 'success',
    data,
  },
});

const fetchDataPending = () => ({
  type: CONSTANTS.FETCH_DATA_PENDING,
  payload: {
    fetchDataRequestStatus: 'pending',
  },
});

const fetchDataFail = () => ({
  type: CONSTANTS.FETCH_DATA_FAIL,
  payload: {
    fetchDataRequestStatus: 'fail',
    data: [],
  },
});

const fetchData = filters => dispatch => {
  dispatch(fetchDataPending());

  const success = (data) => {
    dispatch(fetchDataSuccess(data));
  };

  const fail = () => {
    dispatch(fetchDataFail());
  };

  HotelsApi.fetchData(filters)
    .then(success)
    .catch(fail)
  ;
};

export default {
  fetchData,
};
