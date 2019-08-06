import { put, takeEvery } from 'redux-saga/effects';
import Axios from 'axios';

function* fetchGuests(action) {
    try {
        const response = yield Axios.get('/movie/info');
        yield put({ type: 'SET_MOVIES', payload: response.data })


    } catch (error) {
        console.log('Error with user registration:', error);
        yield put({ type: 'REGISTRATION_FAILED' });
    }
}

function* fetchGuestsSaga() {
    yield takeEvery('FETCH_GUESTS', fetchGuests);
}

export default fetchGuestsSaga;
