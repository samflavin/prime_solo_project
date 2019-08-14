const votes = (state = [], action) => {

    switch (action.type) {
        case 'SET_ONE':
            return action.payload;
        default:
            return state;
    }

};

export default votes;
