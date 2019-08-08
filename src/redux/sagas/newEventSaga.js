import { put, takeEvery } from 'redux-saga/effects';
import Axios from 'axios';

function* createEvent(action) {
    console.log('in createEventSaga', action.payload)
    try {
        yield Axios.post(`/api/events/${action.payload}`);
        yield put({ type: 'SET_EVENT', payload: action.payload })


    } catch (error) {
        console.log('Error with sending new event DB:', error);
    
    }
}





function* newEventSaga() {
    yield takeEvery('NEW_EVENT', createEvent);
  
}

export default newEventSaga;
