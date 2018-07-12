import * as LiabilityActions from '../actions/liability-actions';

const initialState = {
    isReady: false,
    liability: {},
    liabilities: { liabilities: [] }
};

export function liabilityReducer(state = initialState, action) {
    switch (action.type) {
        case LiabilityActions.REQUEST_ALL_LIABILITIES:
        case LiabilityActions.REQUEST_LIABILITY:
            return Object.assign({}, state, {
                isReady: false
            });
        case LiabilityActions.RECEIVE_LIABILITY:
            return Object.assign({}, state, {
                isReady: true,
                liability: action.data
            });
        case LiabilityActions.RECEIVE_ALL_LIABILITIES:
            return Object.assign({}, state, {
                isReady: true,
                liabilities: action.data
            });
        default:
            return state;
    }
}
