import { createStore, combineReducers, compose } from 'redux';
import { persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';

import catReducer from './catReducer';
import feedingReducer from './feedingReducer';
import healthReducer from './healthReducer';
import playtimeReducer from './playtimeReducer';
import poopingReducer from './poopingReducer';

const rootReducer = combineReducers({
    cat: catReducer,
    feeding: feedingReducer,
    health: healthReducer,
    playtime: playtimeReducer,
    pooping: poopingReducer
});

let composeEnhancers = compose;

if (__DEV__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, composeEnhancers());