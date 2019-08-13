import { put, takeEvery } from 'redux-saga/effects';
import Axios from 'axios';

//submits message to db
function* prepMsg(action) {
    console.log('in prep msg action.payload', action.payload)
    try {
        const response = yield Axios.post('/api/chat', action.payload);
        console.log('response data rows from posting messages is', response.data.rows[0].event_id)
        yield put({ type: 'GET_MSG', payload: response.data.rows[0].event_id })

    } catch (error) {
        console.log('Error with getting users:', error);
    }
}

//grabs updates messages
function* getMsg(action) {
    console.log('in get msg action.payload', action.payload)
    try {
        const response = yield Axios.get(`/api/chat/${action.payload}`);
        console.log('response getting messages is', response.data)
        yield put({ type: 'SET_MSG', payload: response.data})

    } catch (error) {
        console.log('Error with getting messages after post:', error);
    }
}

function* chatSaga() {
    yield takeEvery('PREP_MSG', prepMsg);
    yield takeEvery('GET_MSG', getMsg);
}

export default chatSaga;