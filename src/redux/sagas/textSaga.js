import { takeEvery } from 'redux-saga/effects';
import Axios from 'axios';

function* sendText(action) {
    try {
        yield Axios.post('/api/text', action.payload);

    } catch (error) {
        console.log('Error with getting users:', error);
        // yield put({ type: 'REGISTRATION_FAILED' });
    }
}

function* textSaga() {
    yield takeEvery('SEND_TEXT', sendText);
}

export default textSaga;