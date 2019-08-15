import { put, takeEvery } from 'redux-saga/effects';
import Axios from 'axios';

//posts vote to db
function* addOne(action) {
    try {
        console.log('in add one action.payload', action.payload)

        const response = yield Axios.post('/api/vote', action.payload);
        console.log('response data rows from posting vote is', response)

    } catch (error) {
        console.log('Error with posting votes:', error);
    }
}

//grabs votes from db
function* getOne(action) {
    console.log('in get vote action.payload', action.payload)
    try {
        const response = yield Axios.get(`/api/vote/${action.payload}`);
        console.log('response getting vote 1 is', response.data[0].count)
        yield put({ type: 'SET_ONE', payload: response.data[0].count })

    } catch (error) {
        console.log('Error with getting votes after post:', error);
    }
}

function* voteSaga() {
    yield takeEvery('ADD_ONE', addOne);
    yield takeEvery('GET_ONE', getOne);
}

export default voteSaga;