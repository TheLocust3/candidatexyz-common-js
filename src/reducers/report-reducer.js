import * as ReportActions from '../actions/report-actions';

const initialState = {
    isReady: false,
    report: {},
    reports: { reports: [] },
    areReportTypesReady: false,
    reportTypes: {}
};

export function reportReducer(state = initialState, action) {
    switch (action.type) {
        case ReportActions.REQUEST_ALL_REPORTS:
        case ReportActions.REQUEST_REPORT:
            return Object.assign({}, state, {
                isReady: false
            });
        case ReportActions.REQUEST_REPORT_TYPES:
            return Object.assign({}, state, {
                areReportTypesReady: false
            });
        case ReportActions.RECEIVE_REPORT:
            return Object.assign({}, state, {
                isReady: true,
                report: action.data
            });
        case ReportActions.RECEIVE_ALL_REPORTS:
            return Object.assign({}, state, {
                isReady: true,
                reports: action.data
            });
        case ReportActions.RECEIVE_REPORT_TYPES:
            return Object.assign({}, state, {
                areReportTypesReady: true,
                reportTypes: action.data
            });
        default:
            return state;
    }
}
