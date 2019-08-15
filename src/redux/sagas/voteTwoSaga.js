import { put, takeEvery } from 'redux-saga/effects';
import Axios from 'axios';

//posts vote to db
function* addTwo(action) {
    try {
        console.log('in add two action.payload', action.payload)

        const response = yield Axios.post('/api/vote/two', action.payload);
        console.log('response data rows from posting vote 2 is', response)

    } catch (error) {
        console.log('Error with posting votes:', error);
    }
}

//grabs votes from db
function* getTwo(action) {
    console.log('in get vote action.payload', action.payload)
    try {
        const response = yield Axios.get(`/api/vote/two/${action.payload}`);
        console.log('response getting vote 2 is', response.data[0].count)
        yield put({ type: 'SET_TWO', payload: response.data[0].count })

    } catch (error) {
        console.log('Error with getting votes after post:', error);
    }
}

function* voteTwoSaga() {
    yield takeEvery('ADD_TWO', addTwo);
    yield takeEvery('GET_TWO', getTwo);
}

export default voteTwoSaga;