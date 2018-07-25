import { createStore, combineReducers, compose } from 'redux';

import catReducer from './catReducer';
import entryReducer from './entryReducer';

const rootReducer = combineReducers({
    cat: catReducer,
    entry: entryReducer
});

let composeEnhancers = compose;

if (__DEV__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
    return createStore(rootReducer, composeEnhancers());
}

export default configureStore;