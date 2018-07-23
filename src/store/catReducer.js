import {
    CHANGE_AGE,
    CHANGE_NAME,
    CHANGE_WEIGHT
} from './catActions';

const initialState = {
    name: 'Miqo',
    age: '7 months',
    weight: '5 kilos',
    feeding: [
        // {
        //     date: new Date(),
        //     foodType: 'wet' || 'dry' || 'raw',
        //     quantity: null
        // }
    ],
    poop: [
        // {
        //     date: new Date(),
        //     consistency: 'dry' || 'normal' || 'runny'
        // }
    ],
    playtime: [
        // {
        //     date: new Date(),
        //     duration: null
        // }
    ],
    health: {
        deworming: [
            // {
            //     name: '',
            //     frequency: 'daily' || 'weekly' || 'monthly',
            //     startDate: new Date()
            // }
        ],
        medicine: [
            // {
            //     name: '',
            //     frequency: 'daily' || 'weekly' || 'monthly',
            //     startDate: new Date()
            // }
        ],
        vetReminder: {
            //     name: '',
            //     frequency: 'daily' || 'weekly' || 'monthly',
            //     startDate: new Date()
        }
    }
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