const poll = (state = [], action) => {

    switch (action.type) {
        case 'SET_POLL':
            return action.payload;
        default:
            return state;
    }

};

export default poll;
