const votesFour = (state = [], action) => {

    switch (action.type) {
        case 'SET_FOUR':
            return action.payload;
        default:
            return state;
    }

};

export default votesFour;
