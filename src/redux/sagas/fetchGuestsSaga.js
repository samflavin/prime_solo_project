import { put, takeEvery } from 'redux-saga/effects';
import Axios from 'axios';

function* fetchGuests(action) {
    console.log('in fetchGuests')
    try {
        const response = yield Axios.get('/api/guests');
        yield put({ type: 'SET_GUESTS', payload: response.data})
        console.log(response.data)

    } catch (error) {
        console.log('Error with getting users:', error);
        // yield put({ type: 'REGISTRATION_FAILED' });
    }
}

function* fetchGuestsSaga() {
    yield takeEvery('FETCH_GUESTS', fetchGuests);
}

export default fetchGuestsSaga;
