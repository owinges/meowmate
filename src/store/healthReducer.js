// import { ADD_HEALTH_ENTRY } from './entryActions';
import moment from 'moment';

const initialState = {
    entries: [
        {
            date: moment([2019, 2, 23]),
            data: [
                {
                    // time: moment([2019, 2, 23]),
                    // duration: null
                }
            ]
        }
    ]
}


// health: {
//     deworming: [
//         // {
//         //     name: '',
//         //     frequency: 'daily' || 'weekly' || 'monthly',
//         //     startDate: new Date()
//         // }
//     ],
//         medicine: [
//             // {
//             //     name: '',
//             //     frequency: 'daily' || 'weekly' || 'monthly',
//             //     startDate: new Date()
//             // }
//         ],
//             vetReminder: {
//         //     name: '',
//         //     frequency: 'daily' || 'weekly' || 'monthly',
//         //     startDate: new Date()
//     }
// }