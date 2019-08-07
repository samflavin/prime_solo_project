const invitees = (state = [], action) => {

    switch (action.type) {
        case 'SET_INVITEES':
            return [...state, action.payload];
        default:
            return state;
    }

};

// loginMode will be on the redux state at:
// state.loginMode
export default invitees;
