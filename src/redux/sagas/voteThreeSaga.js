import { put, takeEvery } from 'redux-saga/effects';
import Axios from 'axios';

//posts vote to db
function* addThree(action) {
    try {
        console.log('in add Three action.payload', action.payload)

        const response = yield Axios.post('/api/vote/three', action.payload);
        console.log('response data rows from posting vote three is', response)

    } catch (error) {
        console.log('Error with posting votes:', error);
    }
}

//grabs votes from db
function* getThree(action) {
    console.log('in get vote action.payload', action.payload)
    try {
        const response = yield Axios.get(`/api/vote/three/${action.payload}`);
        console.log('response getting vote 3 is', response.data[0].count)
        yield put({ type: 'SET_THREE', payload: response.data[0].count })

    } catch (error) {
        console.log('Error with getting vote 3 after post:', error);
    }
}

function* voteThreeSaga() {
    yield takeEvery('ADD_THREE', addThree);
    yield takeEvery('GET_THREE', getThree);
}

export default voteThreeSaga;