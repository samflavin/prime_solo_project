const votesTwo = (state = [], action) => {

    switch (action.type) {
        case 'SET_TWO':
            return action.payload;
        default:
            return state;
    }

};

export default votesTwo;
