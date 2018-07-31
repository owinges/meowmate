import { ADD_FEEDING, CHECK_FEEDING_TARGET } from './entryActions';
import moment from 'moment';

const initialState = {
    feedingTarget: 500,
    entries: [
        {
            date: moment([2019, 2, 23]),
            data: [
                {
                    time: moment([2018, 7, 23, 1]),
                    foodType: 'Wet food',
                    quantity: 100
                },
                {
                    time: moment([2018, 7, 23, 2]),
                    foodType: 'Wet food',
                    quantity: 100
                },
                {
                    time: moment([2018, 7, 23, 3]),
                    foodType: 'Wet food',
                    quantity: 100
                }
            ],
            feedingTarget: 500
        },
        {
            date: moment([2016, 9, 20]),
            data: [
                {
                    time: moment([2018, 7, 20, 4]),
                    foodType: 'Wet food',
                    quantity: 100
                },
                {
                    time: moment([2018, 7, 20, 5]),
                    foodType: 'Wet food',
                    quantity: 100
                }
            ],
            feedingTarget: 500
        }
    ]
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FEEDING:
            // Check if the date matches a date that already exists
            const duplicateDate = state.entries.findIndex(entry => {
                return moment(entry.date).isSame(action.date, 'day');
            })

            if (duplicateDate === -1) {
                // If there isn't already a matching date, add a new entry object
                return {
                    ...state,
                    entries: [...state.entries, {
                        date: action.date,
                        data: [{
                            time: action.date,
                            foodType: action.foodType,
                            quantity: Number(action.quantity)
                        }],
                        feedingTarget: state.feedingTarget
                    }]
                };
            } else {
                // If the date already exists, add the new entry to the existing entry object
                return {
                    ...state,
                    entries: state.entries.map((entry, index) => {
                        if (index !== duplicateDate) {
                            return entry;
                        } else {
                            return {
                                ...entry,
                                data: [...entry.data, {
                                    time: action.date,
                                    foodType: action.foodType,
                                    quantity: Number(action.quantity)
                                }],
                                feedingTarget: entry.data.feedingTarget - action.quantity
                            };
                        }
                    })
                };
            }
        case CHECK_FEEDING_TARGET:
            const today = moment();

            const checkIfDateExists = state.entries.findIndex(entry => {
                return moment(entry.date).isSame(today, 'day');
            })

            if (checkIfDateExists === -1) {
                // If there isn't already a matching date, add a new entry object
                return {
                    ...state,
                    entries: [...state.entries, {
                        date: today,
                        data: [],
                        feedingTarget: state.feedingTarget
                    }]
                };
            } else {
                return state;
            }
        default:
            return state;
    }
}

export default reducer;