import NotificationApi from '../api/notification-api';

export const REQUEST_NOTIFICATION = 'REQUEST_NOTIFICATION';
export const RECEIVE_NOTIFICATION = 'RECEIVE_NOTIFICATION';
export const REQUEST_ALL_NOTIFICATIONS = 'REQUEST_ALL_NOTIFICATIONS';
export const RECEIVE_ALL_NOTIFICATIONS = 'RECEIVE_ALL_NOTIFICATIONS';

export function requestNotification() {
    return {
        type: REQUEST_NOTIFICATION
    }
}

export function receiveNotification(data) {
    return {
        type: RECEIVE_NOTIFICATION,
        data: data
    }
}

export function requestAllNotifications() {
    return {
        type: REQUEST_ALL_NOTIFICATIONS
    }
}

export function receiveAllNotifications(data) {
    return {
        type: RECEIVE_ALL_NOTIFICATIONS,
        data: data
    }
}

export function fetchAllNotifications() {

    return function (dispatch) {
        dispatch(requestAllNotifications());

        NotificationApi.getAll().then( data => {
            dispatch(receiveAllNotifications(data));
        });
    }
}

export function fetchNotification(id) {

    return function (dispatch) {
        dispatch(requestNotification());

        NotificationApi.get(id).then( data => {
            dispatch(receiveNotification(data));
        });
    }
}
