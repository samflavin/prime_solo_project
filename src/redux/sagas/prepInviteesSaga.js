import {put, takeEvery } from 'redux-saga/effects';
import Axios from 'axios';

function* sendInvites(action) {
    console.log('in sendInvites', action.payload.eventId)
    try {
        yield Axios.post(`/api/guests/${action.payload.userId}`, action.payload);
        yield put({ type:'GET_INVITEES', payload: action.payload.eventId})
       

    } catch (error) {
        console.log('Error with sending invitees to DB:', error);
        // yield put({ type: 'REGISTRATION_FAILED' });
    }
}

function* getInvitees(action) {
    try {
       const response = yield Axios.get(`/api/guests/invitees?id=${action.payload}`);
        yield put({ type: 'UPDATE_INVITEES', payload: response.data})
        
    } catch (error) {
        console.log('Error with sending invitees to DB:', error);
        // yield put({ type: 'REGISTRATION_FAILED' });
    }
}

function* revokeInvites(action) {
    try {
        console.log('in revokeInvites saga action.payload', action.payload)

        yield Axios.delete(`/api/guests/revoke?user_id=${action.payload.userId}&event_id=${action.payload.eventId}`, action.payload);
        yield put({ type: 'GET_INVITEES', payload: action.payload.eventId})


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
