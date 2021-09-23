import {put, call, takeEvery} from 'redux-saga/effects';
import { TJob } from '../../core/models/job';
import {getJobsList, setJobsList} from "./actions";
import { fetchJobsList } from './api';



function* getJobsListSaga() {
    const jobsList: TJob[] = yield fetchJobsList();

    yield put(
        setJobsList(jobsList)
    );
}

function* jobsListSaga() {
    yield takeEvery(getJobsList, getJobsListSaga);
}

export default jobsListSaga;
