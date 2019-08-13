import { put, takeEvery } from 'redux-saga/effects';
import Axios from 'axios';

//submits message to db
function* prepVote(action) {
    console.log('in prep vote action.payload', action.payload)
    try {
        console.log('in prep vote action.payload', action.payload)

        const response = yield Axios.post('/api/vote', action.payload);
        console.log('response data rows from posting vote is', response.data.rows[0].event_id)
        yield put({ type: 'GET_MSG', payload: response.data.rows[0].event_id })

    } catch (error) {
        console.log('Error with posting votes:', error);
    }
}

//grabs updates messages
function* getMsg(action) {
    console.log('in get vote action.payload', action.payload)
    try {
        const response = yield Axios.get(`/api/vote/${action.payload}`);
        console.log('response getting vote is', response.data)
        yield put({ type: 'SET_MSG', payload: response.data })

    } catch (error) {
        console.log('Error with getting votes after post:', error);
    }
}

function* chatSaga() {
    yield takeEvery('PREP_VOTE', prepVote);
    // yield takeEvery('GET_MSG', getMsg);
}

export default chatSaga;