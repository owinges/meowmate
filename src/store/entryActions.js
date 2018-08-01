// Create constants for action types
export const ADD_FEEDING = 'ADD_FEEDING';
export const ADD_PLAYTIME = 'ADD_PLAYTIME';
export const ADD_POOPING = 'ADD_POOPING';
export const CHECK_FEEDING_TARGET = 'CHECK_FEEDING_TARGET';
export const DELETE_ENTRY = 'DELETE_ENTRY';

// Export actions
export const addFeeding = ({ date, foodType, quantity }) => {
    return {
        type: ADD_FEEDING,
        date,
        foodType,
        quantity
    };
}

export const addPooping = ({ date, consistency }) => {
    return {
        type: ADD_POOPING,
        date,
        consistency
    };
}

export const addPlaytime = ({ date, duration }) => {
    return {
        type: ADD_PLAYTIME,
        date,
        duration
    };
}

export const checkFeedingTarget = () => {
    return {
        type: CHECK_FEEDING_TARGET
    }
}

export const deleteEntry = time => {
    return {
        type: DELETE_ENTRY,
        time
    }
}