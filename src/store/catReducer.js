import { ADD_PLACE, DELETE_PLACE } from './catActions';

const initialState = {
    name: '',
    age: null,
    weight: null,
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
        case ADD_PLACE:
            if (action.placeName.trim() === '') {
                return state;
            }
            return {
                ...state,
                places: state.places.concat({
                    key: Math.random().toString(),
                    name: action.placeName,
                    image: {
                        uri: 'https://media.apnarm.net.au/media/images/2017/08/14/b88918691z1_20170814095407_000g2fo5dlj2-0-5iuguypgxh2ktwxwqo2_ct677x380.jpg'
                    }
                })
            };
        case DELETE_PLACE:
            return {
                ...state,
                places: state.places.filter(place => {
                    return place.key !== action.key;
                })
            };
        default:
            return state;
    }
}

export default reducer;