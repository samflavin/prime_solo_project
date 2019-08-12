const currentEvent = (state = [], action) => {

    switch (action.type) {
        case 'SET_CURRENTEVENT':
            return action.payload;
        case 'SET_EVENTLIST':
            return action.payload;
        default:
            return state;
    }

};

export default currentEvent;