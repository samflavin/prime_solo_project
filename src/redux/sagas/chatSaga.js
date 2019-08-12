import { put, takeEvery } from 'redux-saga/effects';
import Axios from 'axios';

function* prepMsg(action) {
    console.log('in prep msg action.payload', action.payload)
    try {
        const response = yield Axios.post('/api/chat', action.payload);
        yield put({ type: 'SET_MSG', payload: response.data })

    } catch (error) {
        console.log('Error with getting users:', error);
    }
}

function* chatSaga() {
    yield takeEvery('PREP_MSG', prepMsg);
}

export default chatSaga;