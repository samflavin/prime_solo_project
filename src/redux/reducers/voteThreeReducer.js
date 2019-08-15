const votesThree = (state = [], action) => {

    switch (action.type) {
        case 'SET_THREE':
            return action.payload;
        default:
            return state;
    }

};

export default votesThree;
