const description = (state = 'here is the description', action) => {

    switch (action.type) {
        case 'PREP_DESCRIPTION':
            return action.payload;
        default:
            return state;
    }
  
};

// loginMode will be on the redux state at:
// state.loginMode
export default description;
