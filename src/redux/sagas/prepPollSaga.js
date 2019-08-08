import { put, takeEvery } from 'redux-saga/effects';
import Axios from 'axios';


//inserts info into poll
function* poll(action) {
    try {
        console.log('in poll saga, action.payload is', action.payload)

        const response = yield Axios.post('/api/poll', action.payload);
        console.log(response.data);
        yield put({ type: 'GET_POLL', payload: action.payload.eventId})


    } catch (error) {
        console.log('Error with setting POLL:', error);
        // yield put({ type: 'REGISTRATION_FAILED' });
    }
}
// gets poll
function* updatePoll(action) {
    try {
        const response = yield Axios.get(`/api/poll/${action.payload}`);
        console.log(response.data);
        yield put({ type: 'SET_POLL', payload: response.data })


    } catch (error) {
        console.log('Error with setting POLL:', error);
        // yield put({ type: 'REGISTRATION_FAILED' });
    }
}

function* prepPollSaga() {
    yield takeEvery('PREP_POLL', poll);
    yield takeEvery('GET_POLL', updatePoll);
}

export default prepPollSaga;
