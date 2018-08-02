// Create constants for action types
export const ADD_FEEDING = 'ADD_FEEDING';
export const ADD_PLAYTIME = 'ADD_PLAYTIME';
export const ADD_POOPING = 'ADD_POOPING';
export const CHECK_FEEDING_TARGET = 'CHECK_FEEDING_TARGET';
export const DELETE_FEEDING = 'DELETE_FEEDING';
export const DELETE_PLAYTIME = 'DELETE_PLAYTIME';
export const DELETE_POOPING = 'DELETE_POOPING';

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

export const deleteFeeding = (time, quantity) => {
    return {
        type: DELETE_FEEDING,
        time,
        quantity
    }
}

export const deletePlaytime = time => {
    return {
        type: DELETE_PLAYTIME,
        time
    }
}

export const deletePooping = time => {
    return {
        type: DELETE_POOPING,
        time
    }
}