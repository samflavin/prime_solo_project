import { combineReducers } from 'redux';
import errors from './errorsReducer';
import loginMode from './loginModeReducer';
import user from './userReducer';
import description from './descriptionReducer'  //import from reducer
import poll from './pollReducer';
import guests from './fetchGuestsReducer';
import invitees from './setInviteesReducer';
import event from './eventReducer';
import options from './optionsReducer'

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  loginMode, // will have a value of 'login' or 'registration' to control which screen is shown
  user, // will have an id and username if someone is logged in
  description, //puts description in redux
  poll, //holds poll info in redux
  guests, //holds guests from db in redux
  invitees,//holds invited guests in redux
  event, //holds event info from DB
  options, // holds options from DB
});

export default rootReducer;
