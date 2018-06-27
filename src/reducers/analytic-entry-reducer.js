import * as AnalyticEntriesActions from '../actions/analytic-entry-actions';

const initialState = {
    isReady: false,
    analyticEntry: {},
    analyticEntries: { analyticEntries: [] },
    aggregateEntries: { hour: [], day: [], month: [] }
};

export function analyticEntryReducer(state = initialState, action) {
    switch (action.type) {
        case AnalyticEntriesActions.REQUEST_ALL_ANALYTIC_ENTRIES:
        case AnalyticEntriesActions.REQUEST_ANALYTIC_ENTRY:
        case AnalyticEntriesActions.REQUEST_AGGREGATE:
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
        case AnalyticEntriesActions.RECEIVE_AGGREGATE:
            let aggregateEntries = state.aggregateEntries;
            aggregateEntries[action.by] = action.data.analyticEntries;

            return Object.assign({}, state, {
                isReady: true,
                aggregateEntries: aggregateEntries
            });
        default:
            return state;
    }
}
