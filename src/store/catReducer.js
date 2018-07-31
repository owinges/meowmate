import {
    CHANGE_AGE,
    CHANGE_NAME,
    CHANGE_WEIGHT
} from './catActions';

const initialState = {
    name: 'Miqo',
    age: '7 months',
    weight: '5 kilos',
    playTarget: 50
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_NAME:
            return {
                ...state,
                name: action.payload
            };
        case CHANGE_AGE:
            return {
                ...state,
                age: action.payload
            };
        case CHANGE_WEIGHT:
            return {
                ...state,
                weight: action.payload
            };
        default:
            return state;
    }
}

export default reducer;