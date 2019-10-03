import { put, takeEvery } from 'redux-saga/effects';
import Axios from 'axios';

function* fetchOptions(action) {
    console.log('in GET OPTIONS action.payload', action.payload)
    try {
        const response = yield Axios.get(`/api/options/${action.payload}`);
        yield put({ type: 'SET_OPTIONS', payload: response.data })
        console.log(response.data)

    } catch (error) {
        console.log('Error with GET OPTIONS:', error);
       
    }
}
//Gets options by event Id
function* getOptions(action) {
    console.log('in GET OPTIONS action.payload', action.payload)
    try {
        const response = yield Axios.get(`/api/options/event/${action.payload}`);
        yield put({ type: 'SET_OPTIONS', payload: response.data })
        console.log(response.data)

    } catch (error) {
        console.log('Error with GET OPTIONS:', error);

    }
}

function* optionsSaga() {
    yield takeEvery('FETCH_OPTIONS', fetchOptions);
    yield takeEvery('GET_OPTIONS', getOptions);
}

export default optionsSaga;