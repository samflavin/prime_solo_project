import { put, takeEvery } from 'redux-saga/effects';
import Axios from 'axios';

function* fetchCurrentEvent(action) {
    try {
        const response = yield Axios.get(`/api/current/${action.payload}`);
        yield put({ type: 'SET_CURRENTEVENT', payload: response.data })
        console.log(response.data)

    } catch (error) {
        console.log('Error with fetchCurrrnetEvent:', error);
        // yield put({ type: 'REGISTRATION_FAILED' });
    }
}

function* fetchEventList(action) {
    try {
        console.log(' in fetch event list , action.payload', action.payload)
        const response = yield Axios.get(`/api/current/list/${action.payload}`);
        yield put({ type: 'SET_EVENTLIST', payload: response.data })
        console.log(response.data)

    } catch (error) {
        console.log('Error with fetchCurrrnetEvent:', error);
        // yield put({ type: 'REGISTRATION_FAILED' });
    }
}

function* currentEventSaga() {
    yield takeEvery('FETCH_CURRENTEVENT', fetchCurrentEvent);
    yield takeEvery('FETCH_EVENTLIST', fetchEventList);

}

export default currentEventSaga;
