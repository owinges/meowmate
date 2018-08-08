// import { CHECK_RECURRENCE } from './healthActions';
import moment from 'moment';

const initialState = {
    entries: {
        deworming: [
            {
                name: 'Advocate',
                startDate: moment(),
                frequency: 'monthly'
            }
        ]
        // medicine: [
        //     {
        //         name: '',
        //         recurrence: {}
        //     }
        // ],
        // vetReminder: [
        //     {
        //         name: '',
        //         recurrence: {}
        //     }
        // ]
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default reducer;