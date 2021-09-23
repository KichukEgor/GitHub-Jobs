import {
    createReducer
} from '@reduxjs/toolkit'
import {TJob} from '../../core/models/job';

import {filteredJobsList, setJobsList} from "./actions";

type TState = {
    jobsList: TJob[], /*| null*/ /*TODO null*/
    filteredJobsList: TJob[],
    searchValue: string
}
/*TODO Object is possibly 'null'*/
const initialState: TState = {
    jobsList: [], /* => null*/
    filteredJobsList: [],
    searchValue: ''
};

export const jobsListReducer = createReducer(
    initialState,
    (builder) => {
        builder
            .addCase(setJobsList, (state, {payload}) => {
                state.jobsList = payload
                state.filteredJobsList = payload
            })
            .addCase(filteredJobsList, (state, payload) => {
                // @ts-ignore
                state.filteredJobsList.filter(item.company === payload)
            })
            .addDefaultCase((state, action) => {
            })
    })
