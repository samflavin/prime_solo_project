import { put, takeEvery } from 'redux-saga/effects';
import Axios from 'axios';

function* poll(action) {
    try {
        console.log('in poll saga, action.payload is', action.payload)

        const response = yield Axios.post('/api/poll', action.payload);
        console.log(response.data.id);
        yield put({ type: 'SET_POLL', payload: response.data.id })


    } catch (error) {
        console.log('Error with getting users:', error);
        // yield put({ type: 'REGISTRATION_FAILED' });
    }
}

function* prepPollSaga() {
    yield takeEvery('PREP_POLL', poll);
}

export default prepPollSaga;
