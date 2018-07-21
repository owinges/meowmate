import { createStore, combineReducers } from 'redux';

import catReducer from './catReducer';

const rootReducer = combineReducers({
    cat: catReducer
});

const configureStore = () => {
    return createStore(rootReducer);
}

export default configureStore;