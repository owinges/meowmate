// Create constants for action types
export const ADD_FEEDING = 'ADD_FEEDING';

// Export actions
export const addFeeding = ({ date, foodType, quantity }) => {
    return {
        type: ADD_FEEDING,
        date,
        foodType,
        quantity
    };
}