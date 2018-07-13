import * as ReportActions from '../actions/report-actions';

const initialState = {
    isReady: false,
    report: {},
    reports: { reports: [] }
};

export function reportReducer(state = initialState, action) {
    switch (action.type) {
        case ReportActions.REQUEST_ALL_REPORTS:
        case ReportActions.REQUEST_REPORT:
            return Object.assign({}, state, {
                isReady: false
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
        default:
            return state;
    }
}
