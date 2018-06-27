import AnalyticEntryApi from '../api/analytic-entry-api';

export const REQUEST_ANALYTIC_ENTRY = 'REQUEST_ANALYTIC_ENTRY';
export const RECEIVE_ANALYTIC_ENTRY = 'RECEIVE_ANALYTIC_ENTRY';
export const REQUEST_ALL_ANALYTIC_ENTRIES = 'REQUEST_ALL_ANALYTIC_ENTRIES';
export const RECEIVE_ALL_ANALYTIC_ENTRIES = 'RECEIVE_ALL_ANALYTIC_ENTRIES';
export const REQUEST_AGGREGATE = 'REQUEST_AGGREGATE';
export const RECEIVE_AGGREGATE = 'RECEIVE_AGGREGATE';

export function requestAnalyticEntry() {
    return {
        type: REQUEST_ANALYTIC_ENTRY
    }
}

export function receiveAnalyticEntry(data) {
    return {
        type: RECEIVE_ANALYTIC_ENTRY,
        data: data
    }
}

export function requestAllAnalyticEntries() {
    return {
        type: REQUEST_ALL_ANALYTIC_ENTRIES
    }
}

export function receiveAllAnalyticEntries(data) {
    return {
        type: RECEIVE_ALL_ANALYTIC_ENTRIES,
        data: data
    }
}

export function requestAggregate() {
    return {
        type: REQUEST_AGGREGATE
    }
}

export function receiveAggregate(by, data) {
    return {
        type: RECEIVE_AGGREGATE,
        by: by,
        data: data
    }
}

export function fetchAllAnalyticEntries() {

    return function (dispatch) {
        dispatch(requestAllAnalyticEntries());

        AnalyticEntryApi.getAll().then( data => {
            dispatch(receiveAllAnalyticEntries(data));
        });
    }
}

export function fetchAggregatedAnalyticEntries(start, end, by) {

    return function (dispatch) {
        dispatch(requestAggregate());

        AnalyticEntryApi.aggregateBy(start, end, by).then( data => {
            dispatch(receiveAggregate(by, data));
        });
    }
}

export function fetchAnalyticEntry(id) {

    return function (dispatch) {
        dispatch(requestAnalyticEntry());

        AnalyticEntryApi.get(id).then( data => {
            dispatch(receiveAnalyticEntry(data));
        });
    }
}
