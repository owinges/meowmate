import { ADD_PLAYTIME } from './entryActions';
import moment from 'moment';

const initialState = {
    playtimeTarget: 60,
    entries: [
        {
            date: moment([2019, 2, 23]),
            data: [
                {
                    time: moment([2019, 2, 23]),
                    duration: 15
                }
            ]
        }
    ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLAYTIME:
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
                            duration: Number(action.duration)
                        }]
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
                                    duration: Number(action.duration)
                                }]
                            };
                        }
                    })
                };
            }
        default:
            return state;
    }
}

export default reducer;