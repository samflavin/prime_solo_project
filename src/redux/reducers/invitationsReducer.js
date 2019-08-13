const invitations = (state = [], action) => {

    switch (action.type) {
        case 'SET_INVITATIONS':
            return action.payload;
        default:
            return state;
    }

};

export default invitations;