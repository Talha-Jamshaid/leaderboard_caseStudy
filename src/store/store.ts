import {createStore, applyMiddleware, Store, combineReducers} from 'redux';
import thunk, {ThunkMiddleware} from 'redux-thunk';
import homeReducer from './reducers/homeReducer';

// Define any middleware you want to use
const middleware = [thunk];

const rootReducer = combineReducers({
  home: homeReducer,
});

// Create the Redux store with combined reducers and middleware
const store = createStore(rootReducer);

export default store;
