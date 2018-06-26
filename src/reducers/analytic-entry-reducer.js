import * as AnalyticEntriesActions from '../actions/analytic-entry-actions';

const initialState = {
    isReady: false,
    analyticEntry: {},
    analyticEntries: { analyticEntries: [] }
};

export function analyticEntryReducer(state = initialState, action) {
    switch (action.type) {
        case AnalyticEntriesActions.REQUEST_ALL_ANALYTIC_ENTRIES:
        case AnalyticEntriesActions.REQUEST_ANALYTIC_ENTRY:
            return Object.assign({}, state, {
                isReady: false
            });
        case AnalyticEntriesActions.RECEIVE_ANALYTIC_ENTRY:
            return Object.assign({}, state, {
                isReady: true,
                analyticEntry: action.data
            });
        case AnalyticEntriesActions.RECEIVE_ALL_ANALYTIC_ENTRIES:
            return Object.assign({}, state, {
                isReady: true,
                analyticEntries: action.data
            });
        default:
            return state;
    }
}
