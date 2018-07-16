import * as CommitteeActions from '../actions/committee-actions';

const initialState = {
    isReady: false,
    committee: {},
    committees: { committees: [] }
};

export function committeeReducer(state = initialState, action) {
    switch (action.type) {
        case CommitteeActions.REQUEST_ALL_COMMITTEES:
        case CommitteeActions.REQUEST_COMMITTEE:
            return Object.assign({}, state, {
                isReady: false
            });
        case CommitteeActions.RECEIVE_COMMITTEE:
            return Object.assign({}, state, {
                isReady: true,
                committee: action.data
            });
        case CommitteeActions.RECEIVE_ALL_COMMITTEES:
            return Object.assign({}, state, {
                isReady: true,
                committees: action.data
            });
        default:
            return state;
    }
}
