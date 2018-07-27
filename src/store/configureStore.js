import { createStore, combineReducers, compose } from 'redux';

import catReducer from './catReducer';
import feedingReducer from './feedingReducer';

const rootReducer = combineReducers({
    cat: catReducer,
    feeding: feedingReducer
});

let composeEnhancers = compose;

if (__DEV__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
    return createStore(rootReducer, composeEnhancers());
}

export default configureStore;