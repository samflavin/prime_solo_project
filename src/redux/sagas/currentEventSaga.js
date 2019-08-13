import { put, takeEvery } from 'redux-saga/effects';
import Axios from 'axios';

//gets all events that user has created
function* fetchCurrentEvent(action) {
    try {
        const response = yield Axios.get(`/api/current/${action.payload}`);
        yield put({ type: 'SET_CURRENTEVENT', payload: response.data })
        console.log(response.data)

    } catch (error) {
        console.log('Error with fetchCurrrnetEvent:', error);
    }
}
//gets all invitations 
function* fetchInvitations(action) {
    try {
        const response = yield Axios.get(`/api/current/invitations/${action.payload}`);
        console.log('back from fetch invitations with',response.data)
        yield put({ type: 'SET_INVITATIONS', payload: response.data })
        console.log(response.data)

    } catch (error) {
        console.log('Error with fetchCurrrnetEvent:', error);
    }
}

//gets name and id of event
function* fetchEventList(action) {
    try {
        console.log(' in fetch event list , action.payload', action.payload)
        const response = yield Axios.get(`/api/current/list/${action.payload}`);
        yield put({ type: 'SET_EVENTLIST', payload: response.data })
        console.log(response.data)

    } catch (error) {
        console.log('Error with fetchCurrrnetEvent:', error);
    }
}

//gets name and id of invited event
function* fetchInvitationList(action) {
    try {
        console.log(' in fetch invited event list , action.payload', action.payload)
        const response = yield Axios.get(`/api/current/invitations/list/${action.payload}`);
        console.log('back from fetch invitatio list, response.data',response.data)
        yield put({ type: 'SET_INVITATIONLIST', payload: response.data })
        console.log(response.data)

    } catch (error) {
        console.log('Error with fetchCurrrnetEvent:', error);
    }
}

function* currentEventSaga() {
    yield takeEvery('FETCH_CURRENTEVENT', fetchCurrentEvent);
    yield takeEvery('FETCH_EVENTLIST', fetchEventList);
    yield takeEvery('FETCH_INVITATIONS', fetchInvitations);
    yield takeEvery('FETCH_INVITATIONLIST', fetchInvitationList);


}

export default currentEventSaga;
