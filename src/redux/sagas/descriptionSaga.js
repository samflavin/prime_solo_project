import { put, takeEvery } from 'redux-saga/effects';
import Axios from 'axios';

function* description(action) {
    try {
        console.log('in description saga, action.payload is', action.payload)

        const response = yield Axios.post('/api/events', action.payload );
        console.log(response.data.id);
        yield put({ type: 'SET_EVENTID', payload: response.data.id });

    

    } catch (error) {
        console.log('Error with getting users:', error);
        // yield put({ type: 'REGISTRATION_FAILED' });
    }
}

function* getDescription(action) {
    try {
        console.log('in GETdescription saga, action.payload is', action.payload)

        const response = yield Axios.get(`/api/events/description/${action.payload}`);
        console.log(response)
        yield put({ type: 'SET_DESCRIPTION', payload: response.data });



    } catch (error) {
        console.log('Error with GET DESCRIPTION:', error);
        // yield put({ type: 'REGISTRATION_FAILED' });
    }
}

function* descriptionSaga() {
    yield takeEvery('PREP_DESCRIPTION', description);
    yield takeEvery('GET_DESCRIPTION', getDescription);

}

export default descriptionSaga;
