const messages = (state = [], action) => {

    switch (action.type) {
        case 'SET_MSG':
            return action.payload;
        default:
            return state;
    }

};

export default messages;