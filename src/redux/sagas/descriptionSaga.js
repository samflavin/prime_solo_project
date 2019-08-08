import { put, takeEvery } from 'redux-saga/effects';
import Axios from 'axios';

function* description(action) {
    console.log('in description w', action)
    try {
        const response = yield Axios.get('/api/guests');
        yield put({ type: 'SET_GUESTS', payload: response.data })
        console.log(response.data)

    } catch (error) {
        console.log('Error with getting users:', error);
        // yield put({ type: 'REGISTRATION_FAILED' });
    }
}

function* descriptionSaga() {
    yield takeEvery('PREP_DESCRIPTION', description);
}

export default descriptionSaga;
