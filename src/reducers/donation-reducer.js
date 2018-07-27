import * as DonationActions from '../actions/donation-actions';

const initialState = {
    isReady: false,
    donations: { donations: [] }
};

export function donationReducer(state = initialState, action) {
    switch (action.type) {
        case DonationActions.REQUEST_ALL_DONATIONS:
            return Object.assign({}, state, {
                isReady: false
            });
        case DonationActions.RECEIVE_ALL_DONATIONS:
            return Object.assign({}, state, {
                isReady: true,
                donations: action.data
            });
        default:
            return state;
    }
}
