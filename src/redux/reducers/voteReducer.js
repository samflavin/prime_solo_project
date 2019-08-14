const votes = (state = [], action) => {

    switch (action.type) {
        case 'SET_VOTE':
            return action.payload;
        default:
            return state;
    }

};

export default votes;
