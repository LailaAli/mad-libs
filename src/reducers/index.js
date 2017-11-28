const INITIAL_STATE = {
    story: "fjdklafjslkf"
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case "READ_STORY":
            return readStory(state, action.firstWord, action.secondWord)
        default:
            // If we don't recognize the action, don't change the state.
            return state;
    }
}

function readStory(state, firstWord, secondWord) {
    // Just like plain React, the state is an immutable object. Rather than
    // changing part of the state, we must replace it.
    return Object.assign({}, state, {
        story: firstWord + " is better than " + secondWord
    });
}


