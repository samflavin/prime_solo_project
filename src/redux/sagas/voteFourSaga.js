import { put, takeEvery } from 'redux-saga/effects';
import Axios from 'axios';

//posts vote to db
function* addFour(action) {
    try {
        console.log('in add four action.payload', action.payload)

        const response = yield Axios.post('/api/vote/four', action.payload);
        console.log('response data rows from posting vote four is', response)

    } catch (error) {
        console.log('Error with posting vote four:', error);
    }
}

//grabs votes from db
function* getFour(action) {
    console.log('in get vote action.payload', action.payload)
    try {
        const response = yield Axios.get(`/api/vote/four/${action.payload}`);
        console.log('response getting vote four is', response.data[0].count)
        yield put({ type: 'SET_FOUR', payload: response.data[0].count })

    } catch (error) {
        console.log('Error with getting vote four after post:', error);
    }
}

function* voteFourSaga() {
    yield takeEvery('ADD_FOUR', addFour);
    yield takeEvery('GET_FOUR', getFour);
}

export default voteFourSaga;