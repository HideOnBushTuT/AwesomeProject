import * as Types from './ActionType';

export default (state, action) => {
    const { counterCaption } = action;

    switch(action.type) {
        case Types.INCREMENT:
            return { ...state, [counterCaption]: state[counterCaption] + 1 };
        case Types.DECREMENT:
            return { ...state, [counterCaption]: state[counterCaption] - 1};
        default: 
            return state;
    }
}

