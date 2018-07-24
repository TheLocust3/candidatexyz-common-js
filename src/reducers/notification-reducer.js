import * as NotificationActions from '../actions/notification-actions';

const initialState = {
    isReady: false,
    notification: {},
    notifications: { notifications: [] }
};

export function notificationReducer(state = initialState, action) {
    switch (action.type) {
        case NotificationActions.REQUEST_ALL_NOTIFICATIONS:
        case NotificationActions.REQUEST_NOTIFICATION:
            return Object.assign({}, state, {
                isReady: false
            });
        case NotificationActions.RECEIVE_NOTIFICATION:
            return Object.assign({}, state, {
                isReady: true,
                notification: action.data
            });
        case NotificationActions.RECEIVE_ALL_NOTIFICATIONS:
            return Object.assign({}, state, {
                isReady: true,
                notifications: action.data
            });
        default:
            return state;
    }
}
