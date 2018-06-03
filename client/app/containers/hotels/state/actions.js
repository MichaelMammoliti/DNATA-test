import HotelsApi from './api';
import CONSTANTS from './constants';

const fetchDataSuccess = data => ({
  type: CONSTANTS.FETCH_DATA_SUCCESS,
  payload: {
    fetchDataRequestStatus: 'success',
    data,
  },
});

const fetchDataPending = (filters = {}) => ({
  type: CONSTANTS.FETCH_DATA_PENDING,
  payload: {
    filters,
    data: [],
    fetchDataRequestStatus: 'pending',
  },
});

const fetchDataFail = () => ({
  type: CONSTANTS.FETCH_DATA_FAIL,
  payload: {
    fetchDataRequestStatus: 'fail',
  },
});

const fetchData = filters => dispatch => {
  dispatch(fetchDataPending(filters));

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
