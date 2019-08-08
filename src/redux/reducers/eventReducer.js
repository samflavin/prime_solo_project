const event = (state = [], action) => {

    switch (action.type) {
        case 'SET_EVENTID':
            return  action.payload;
        default:
            return state;
    }

};

export default event;
