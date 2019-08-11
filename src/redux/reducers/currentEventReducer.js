const currentEvent = (state = [], action) => {

    switch (action.type) {
        case 'SET_CURRENTEVENT':
            return action.payload;
        default:
            return state;
    }

};

export default currentEvent;