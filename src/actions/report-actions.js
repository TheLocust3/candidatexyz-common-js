import ReportApi from '../api/report-api';

export const REQUEST_REPORT = 'REQUEST_REPORT';
export const RECEIVE_REPORT = 'RECEIVE_REPORT';
export const REQUEST_ALL_REPORTS = 'REQUEST_ALL_REPORTS';
export const RECEIVE_ALL_REPORTS = 'RECEIVE_ALL_REPORTS';

export function requestReport() {
    return {
        type: REQUEST_REPORT
    }
}

export function receiveReport(data) {
    return {
        type: RECEIVE_REPORT,
        data: data
    }
}

export function requestAllReports() {
    return {
        type: REQUEST_ALL_REPORTS
    }
}

export function receiveAllReports(data) {
    return {
        type: RECEIVE_ALL_REPORTS,
        data: data
    }
}

export function fetchAllReports() {

    return function (dispatch) {
        dispatch(requestAllReports());

        ReportApi.getAll().then( data => {
            dispatch(receiveAllReport(data));
        });
    }
}

export function fetchReport(id) {

    return function (dispatch) {
        dispatch(requestReport());

        ReportApi.get(id).then( data => {
            dispatch(receiveReport(data));
        });
    }
}
