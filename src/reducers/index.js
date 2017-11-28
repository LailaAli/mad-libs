const INITIAL_STATE = {
    
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        default:
            // If we don't recognize the action, don't change the state.
            return state;
    }
}

/* function addOneVote(state, flavor) {
        // Just like plain React, the state is an immutable object. Rather than
    // changing part of the state, we must replace it.
    return Object.assign({}, state, {
    });
} */
