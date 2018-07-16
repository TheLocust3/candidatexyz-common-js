import * as StaffActions from '../actions/staff-actions';

const initialState = {
    isReady: false,
    isCurrentUserReady: false,
    currentUser: {},
    user: {},
    users: { users: [] },
    positions: { positions: [] }
};

export function staffReducer(state = initialState, action) {
    switch (action.type) {
        case StaffActions.REQUEST_STAFF_POSITIONS:
        case StaffActions.REQUEST_USER:
        case StaffActions.REQUEST_ALL_USERS:
            return Object.assign({}, state, {
                isReady: false
            });
        case StaffActions.REQUEST_CURRENT_USER:
            return Object.assign({}, state, {
                isCurrentUserReady: false
            });
        case StaffActions.RECEIVE_CURRENT_USER:
            return Object.assign({}, state, {
                isCurrentUserReady: true,
                currentUser: action.data
            });
        case StaffActions.RECEIVE_USER:
            return Object.assign({}, state, {
                isReady: true,
                user: action.data
            });
        case StaffActions.RECEIVE_ALL_USERS:
            return Object.assign({}, state, {
                isReady: true,
                users: action.data
            });
        case StaffActions.RECEIVE_STAFF_POSITIONS:
            return Object.assign({}, state, {
                isReady: true,
                positions: action.data
            });
        default:
            return state;
    }
}
