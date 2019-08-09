import {put, takeEvery } from 'redux-saga/effects';
import Axios from 'axios';

function* sendInvites(action) {
    console.log('in sendInvites', action.payload.eventId)
    try {
        yield Axios.post(`/api/guests/${action.payload.userId}`, action.payload);
        yield put({ type:'GET_INVITEES'})
       

    } catch (error) {
        console.log('Error with sending invitees to DB:', error);
        // yield put({ type: 'REGISTRATION_FAILED' });
    }
}

function* getInvitees() {
    try {
       const response = yield Axios.get(`/api/guests/invitees`);
        console.log('in get invitees saga', response.data);
        yield put({ type: 'UPDATE_INVITEES', payload: response.data})
        
    } catch (error) {
        console.log('Error with sending invitees to DB:', error);
        // yield put({ type: 'REGISTRATION_FAILED' });
    }
}

function* revokeInvites(action) {
    console.log('in revokeInvites', action.payload)
    try {
        yield Axios.delete(`/api/guests/${action.payload}`);
        yield put({ type: 'GET_INVITEES'})


    } catch (error) {
        console.log('Error with revoking invitees from DB:', error);
        // yield put({ type: 'REGISTRATION_FAILED' });
    }
}


function* prepInviteesSaga() {
    yield takeEvery('PREP_INVITEES', sendInvites);
    yield takeEvery('ALTER_INVITEES', revokeInvites);
    yield takeEvery('GET_INVITEES', getInvitees);
}

export default prepInviteesSaga;
