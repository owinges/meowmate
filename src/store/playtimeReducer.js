import { ADD_PLAYTIME, CHECK_PLAYTIME_TARGET, DELETE_PLAYTIME } from './entryActions';
import moment from 'moment';

const initialState = {
    playtimeTarget: {
        target: 60,
        fulfilled: 0
    },
    entries: [
        // {
        //     date: moment([2019, 2, 23]),
        //     data: [
        //         {
        //             time: moment([2019, 2, 23]),
        //             duration: 15
        //         }
        //     ],
        //     playtimeTarget: {
        //         target: 60,
        //         fulfilled: 15
        //     }
        // }
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
                        }],
                        playtimeTarget: {
                            target: state.playtimeTarget.target,
                            fulfilled: Number(action.duration)
                        }
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
                                }],
                                playtimeTarget: {
                                    target: entry.playtimeTarget.target,
                                    fulfilled: entry.playtimeTarget.fulfilled + Number(action.duration)
                                }
                            };
                        }
                    })
                };
            }
        case DELETE_PLAYTIME:
            const date = state.entries.findIndex(entry => {
                return moment(entry.date).isSame(action.time, 'day');
            })

            return {
                ...state,
                entries: state.entries.map((entry, index) => {
                    if (index !== date) {
                        return entry;
                    } else {
                        console.log(entry.playtimeTarget.fulfilled);
                        console.log(action.duration);
                        return {
                            ...entry,
                            data: entry.data.filter(entry => {
                                return moment(entry.time).format() !== action.time;
                            }),
                            playtimeTarget: {
                                ...entry.playtimeTarget,
                                fulfilled: entry.playtimeTarget.fulfilled - Number(action.duration)
                            }
                        };
                    }
                })
            };
        case CHECK_PLAYTIME_TARGET:
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
                        playtimeTarget: state.playtimeTarget
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