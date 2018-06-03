import HotelsApi from './api';
import CONSTANTS from './constants';

const fetchDataPending = (params = {}) => ({
  type: CONSTANTS.FETCH_DATA_PENDING,
  payload: {
    params,
    data: [],
    fetchDataRequestStatus: 'pending',
  },
});

const fetchDataSuccess = data => ({
  type: CONSTANTS.FETCH_DATA_SUCCESS,
  payload: {
    fetchDataRequestStatus: 'success',
    data,
  },
});

const fetchDataFail = () => ({
  type: CONSTANTS.FETCH_DATA_FAIL,
  payload: {
    fetchDataRequestStatus: 'fail',
  },
});

const fetchData = (params = {}) => dispatch => {
  dispatch(fetchDataPending(params));

  const success = (data) => {
    dispatch(fetchDataSuccess(data));
  };

  const fail = () => {
    dispatch(fetchDataFail());
  };

  HotelsApi.fetchData(params)
    .then(success)
    .catch(fail)
  ;
};

export default {
  fetchData,
};
