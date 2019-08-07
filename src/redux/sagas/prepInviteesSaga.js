import {put, takeEvery } from 'redux-saga/effects';
import Axios from 'axios';

function* sendInvites(action) {
    console.log('in sendInvites', action.payload)
    try {
        yield Axios.post(`/api/guests/${action.payload}`);
        yield put({ type: 'SET_INVITEES', payload: action.payload })
       

    } catch (error) {
        console.log('Error with sending invitees to DB:', error);
        // yield put({ type: 'REGISTRATION_FAILED' });
    }
}

function* revokeInvites(action) {
    console.log('in sendInvites', action.payload)
    try {
        yield Axios.delete(`/api/guests/${action.payload}`);
        yield put({ type: 'SET_INVITEES', payload: action.payload })


    } catch (error) {
        console.log('Error with revoking invitees from DB:', error);
        // yield put({ type: 'REGISTRATION_FAILED' });
    }
}


function* prepInviteesSaga() {
    yield takeEvery('PREP_INVITEES', sendInvites);
    yield takeEvery('ALTER_INVITEES', revokeInvites);
}

export default prepInviteesSaga;
