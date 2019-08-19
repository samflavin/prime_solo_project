import { put, takeEvery } from 'redux-saga/effects';
import Axios from 'axios';

function* fetchId(action) {
    console.log('in fetchID, action.payload:',action.payload)
    try {
        const response = yield Axios.get('/api/event/getId');
        yield put({ type: 'SET_EVENT_USER_ID', payload: response.data })
        console.log('back from get event id with', response.data)

    } catch (error) {
        console.log('Error with getting event Id:', error);
    }
}

function* fetchIdSaga() {
    yield takeEvery('GET_EVENT_USER_ID', fetchId);
}

export default fetchIdSaga;