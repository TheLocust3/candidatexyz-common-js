import * as DonorActions from '../actions/donor-actions';

const initialState = {
    isReady: false,
    donor: {},
    donors: { donors: [] }
};

export function donorReducer(state = initialState, action) {
    switch (action.type) {
        case DonorActions.REQUEST_ALL_DONORS:
        case DonorActions.REQUEST_DONOR:
            return Object.assign({}, state, {
                isReady: false
            });
        case DonorActions.RECEIVE_DONOR:
            return Object.assign({}, state, {
                isReady: true,
                donor: action.data
            });
        case DonorActions.RECEIVE_ALL_DONORS:
            return Object.assign({}, state, {
                isReady: true,
                donors: action.data
            });
        default:
            return state;
    }
}
