import * as AnalyticEntriesActions from '../actions/analytic-entry-actions';

const initialState = {
    isReady: false,
    analyticEntry: {},
    analyticEntries: { analyticEntries: [] },
    aggregateEntries: { hour: [], day: [], month: [], year: [] },
    isAggregateReady: { hour: false, day: false, month: false, year: false }
};

export function analyticEntryReducer(state = initialState, action) {
    switch (action.type) {
        case AnalyticEntriesActions.REQUEST_ALL_ANALYTIC_ENTRIES:
        case AnalyticEntriesActions.REQUEST_ANALYTIC_ENTRY:
            return Object.assign({}, state, {
                isReady: false
            });
        case AnalyticEntriesActions.REQUEST_AGGREGATE:
            let isAggregateReady = state.isAggregateReady;
            isAggregateReady[action.by] = false;

            return Object.assign({}, state, {
                isAggregateReady: isAggregateReady
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
            isAggregateReady = state.isAggregateReady;
            aggregateEntries[action.by] = action.data.analyticEntries;
            isAggregateReady[action.by] = true;

            return Object.assign({}, state, {
                isAggregateReady: isAggregateReady,
                aggregateEntries: aggregateEntries
            });
        default:
            return state;
    }
}
