const poll = (state = [], action) => {

    switch (action.type) {
        case 'PREP_POLL':
            return [...state, action.payload];
        default:
            return state;
    }

};

// loginMode will be on the redux state at:
// state.loginMode
export default poll;
