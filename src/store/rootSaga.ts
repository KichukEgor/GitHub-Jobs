import { all, fork } from "redux-saga/effects";

import jobsListSaga from "./jobs-list/saga";

export function* rootSaga() {
    yield all([fork(jobsListSaga)]);
}