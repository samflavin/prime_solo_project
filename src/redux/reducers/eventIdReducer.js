const eventUserId = (state = [], action) => {

    switch (action.type) {
        case 'SET_EVENT_USER_ID':
            return action.payload;
        default:
            return state;
    }

};

export default eventUserId;