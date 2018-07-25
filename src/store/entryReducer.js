import {
    ADD_ENTRY,
    CHANGE_TYPE
} from './entryActions';

const initialState = {
    type: 'what',
    feeding: [
        {
            key: Math.random().toString(),
            date: new Date(),
            foodType: 'Wet food',
            quantity: '10 grams'
        }
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
        case CHANGE_TYPE:
            return {
                ...state,
                type: action.payload
            };
        case ADD_ENTRY:
            return {
                ...state,
                feeding: [...state.feeding, action.payload]
            };
        default:
            return state;
    }
}

export default reducer;