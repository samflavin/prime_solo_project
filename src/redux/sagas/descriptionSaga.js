import { put, takeEvery } from 'redux-saga/effects';
import Axios from 'axios';

function* description(action) {
    try {
        console.log('in description saga, action.payload is', action.payload)

        const response = yield Axios.post('/api/events', action.payload );
        console.log(response.data.id);
        yield put({ type: 'SET_EVENTID', payload: response.data.id })
    

    } catch (error) {
        console.log('Error with getting users:', error);
        // yield put({ type: 'REGISTRATION_FAILED' });
    }
}

function* descriptionSaga() {
    yield takeEvery('PREP_DESCRIPTION', description);
}

export default descriptionSaga;
