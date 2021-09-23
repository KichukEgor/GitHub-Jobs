import {combineReducers} from "@reduxjs/toolkit";

import {jobsListReducer} from "./jobs-list/reducer";

export const rootReducer = combineReducers({
        jobsList: jobsListReducer
    })

export type RootState = ReturnType<typeof rootReducer>