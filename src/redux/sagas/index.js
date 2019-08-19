import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registrationSaga from './registrationSaga';
import userSaga from './userSaga';
import fetchGuestsSaga from './fetchGuestsSaga'
import prepInviteesSaga from './prepInviteesSaga'
import newEventSaga from './newEventSaga';
import descriptionSaga from './descriptionSaga';
import prepPollSaga from './prepPollSaga';
import optionsSaga from './optionsSaga'
import currentEventSaga from './currentEventSaga';
import chatSaga from './chatSaga';
import voteSaga from './voteSaga';
import voteTwoSaga from './voteTwoSaga';
import voteThreeSaga from './voteThreeSaga';
import voteFourSaga from './voteFourSaga';
import editDescriptionSaga from './editDescriptionSaga';
import textSaga from './textSaga';
import eventIdSaga from './eventIdSaga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga









// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
    fetchGuestsSaga(),
    prepInviteesSaga(),
    newEventSaga(),
    descriptionSaga(),
    prepPollSaga(),
    optionsSaga(),
    currentEventSaga(),
    chatSaga(),
    voteSaga(),
    voteTwoSaga(),
    voteThreeSaga(),
    voteFourSaga(),
    editDescriptionSaga(),
    textSaga(),
    eventIdSaga(),


  ]);
}
