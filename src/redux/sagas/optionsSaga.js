import { put, takeEvery } from 'redux-saga/effects';
import Axios from 'axios';

function* fetchOptions(action) {
    console.log('in fetchGuests')
    try {
        const response = yield Axios.get(`/api/options/${action.payload}`);
        yield put({ type: 'SET_OPTIONS', payload: response.data })
        console.log(response.data)

    } catch (error) {
        console.log('Error with GET OPTIONS:', error);
       
    }
}

function* optionsSaga() {
    yield takeEvery('FETCH_OPTIONS', fetchOptions);
}

export default optionsSaga;