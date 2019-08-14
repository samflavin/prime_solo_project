import { put, takeEvery } from 'redux-saga/effects';
import Axios from 'axios';

//posts vote to db
function* prepVote(action) {
    console.log('in prep vote action.payload', action.payload)
    try {
        console.log('in prep vote action.payload', action.payload)

        const response = yield Axios.post('/api/vote', action.payload);
        console.log('response data rows from posting vote is', response)
        yield put({ type: 'GET_VOTE', payload: response.data.rows[0].event_id })

    } catch (error) {
        console.log('Error with posting votes:', error);
    }
}

//grabs votes from db
function* getVote(action) {
    console.log('in get vote action.payload', action.payload)
    try {
        const response = yield Axios.get(`/api/vote/${action.payload}`);
        console.log('response getting vote is', response.data)
        yield put({ type: 'SET_VOTE', payload: response.data })

    } catch (error) {
        console.log('Error with getting votes after post:', error);
    }
}

function* chatSaga() {
    yield takeEvery('PREP_VOTE', prepVote);
    yield takeEvery('GET_VOTE', getVote);
}

export default chatSaga;