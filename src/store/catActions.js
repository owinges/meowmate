// Create constants for action types
export const CHANGE_NAME = 'CHANGE_NAME';
export const CHANGE_AGE = 'CHANGE_AGE';
export const CHANGE_WEIGHT = 'CHANGE_WEIGHT';

// Export actions
export const changeName = (name) => {
    return {
        type: CHANGE_NAME,
        payload: name
    };
}

export const changeAge = (age) => {
    return {
        type: CHANGE_AGE,
        payload: age
    };
}

export const changeWeight = (weight) => {
    return {
        type: CHANGE_WEIGHT,
        payload: weight
    };
}
