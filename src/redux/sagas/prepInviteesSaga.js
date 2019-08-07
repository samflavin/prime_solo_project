import {takeEvery } from 'redux-saga/effects';
import Axios from 'axios';

function* sendInvites(action) {
    console.log('in sendInvites', action.payload)
    try {
        yield Axios.post(`/api/guests/${action.payload}`);
        // yield put({ type: 'SET_GUESTS', payload: response.data })
       

    } catch (error) {
        console.log('Error with sending invitees to DB:', error);
        // yield put({ type: 'REGISTRATION_FAILED' });
    }
}

function* prepInviteesSaga() {
    yield takeEvery('PREP_INVITEES', sendInvites);
}

export default prepInviteesSaga;
