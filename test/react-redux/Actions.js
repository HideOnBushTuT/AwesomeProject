import * as Types from './ActionTypes';

export const increment = (counterCaption) => {
    return {
        type: Types.INCREMENT,
        counterCaption: counterCaption,
    };
};

export const decrement = (counterCaption) => {
    return {
        type: Types.DECREMENT,
        counterCaption: counterCaption,
    };
};