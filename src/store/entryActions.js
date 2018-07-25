// Create constants for action types
export const ADD_ENTRY = 'ADD_ENTRY';
export const CHANGE_TYPE = 'CHANGE_TYPE';

// Export actions
export const addEntry = (entry) => {
    return {
        type: ADD_ENTRY,
        payload: entry
    };
}

export const changeType = (type) => {
    return {
        type: CHANGE_TYPE,
        payload: type
    };
}