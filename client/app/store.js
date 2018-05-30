import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// Reducers
import hotelsReducer from './containers/hotels/state/reducer';

const reducerCollection = combineReducers({
  hotels: hotelsReducer,
});

export default createStore(reducerCollection, {}, applyMiddleware(thunk, logger));
