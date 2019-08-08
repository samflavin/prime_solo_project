import { put, takeEvery } from 'redux-saga/effects';
import Axios from 'axios';

function* createEvent(action) {
    console.log('in createEventSaga', action.payload)
    try {
        yield Axios.post(`/api/events/${action.payload}`);
        //requests db info after making post
        yield put({ type: 'GET_EVENT', payload: action.payload})
    } catch (error) {
        console.log('Error with sending new event DB:', error);
    
    }
}

function* getEvent (action) {
    try {
        console.log('in get event targeting',action.payload);
        const response = yield Axios.get(`/api/events/${action.payload}`);
        console.log('in get events response from db is', response.data);
        yield put({ type: 'SET_EVENT', payload: response.data })

    } catch (error) {
        console.log('Error with getting events from DB:', error);
        // yield put({ type: 'REGISTRATION_FAILED' });
    }
}





function* newEventSaga() {
    yield takeEvery('NEW_EVENT', createEvent);
    yield takeEvery('GET_EVENT', getEvent)
  
}

export default newEventSaga;
