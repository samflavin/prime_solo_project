import { put, takeEvery } from 'redux-saga/effects';
import Axios from 'axios';

function* editDescription(action) {
    try {
        console.log('in edit description saga, action.payload is', action.payload)

        // const response = yield Axios.put('/api/events', action.payload);
        // console.log(response.data.id);
        // yield put({ type: 'SET_EVENTID', payload: response.data.id });

    } catch (error) {
        console.log('Error with getting users:', error);
        // yield put({ type: 'REGISTRATION_FAILED' });
    }
}

// function* getDescription(action) {
//     try {
//         console.log('in GETdescription saga, action.payload is', action.payload)

//         const response = yield Axios.get(`/api/events/description/${action.payload}`);
//         console.log(response)
//         yield put({ type: 'SET_DESCRIPTION', payload: response.data });



//     } catch (error) {
//         console.log('Error with GET DESCRIPTION:', error);
//         // yield put({ type: 'REGISTRATION_FAILED' });
//     }
// }

function* descriptionSaga() {
    yield takeEvery('SET_EDIT_DESCRIPTION', editDescription);
    // yield takeEvery('GET_DESCRIPTION', getDescription);

}

export default descriptionSaga;