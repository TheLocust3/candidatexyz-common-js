import StaffApi from '../api/staff-api';
import AuthApi from '../api/auth-api';

export const REQUEST_USER = 'REQUEST_USER';
export const RECEIVE_USER = 'RECEIVE_USER';
export const REQUEST_ALL_USERS = 'REQUEST_ALL_USERS';
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const REQUEST_CURRENT_USER = 'REQUEST_CURRENT_USER';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const REQUEST_STAFF_POSITIONS = 'REQUEST_STAFF_POSITIONS';
export const RECEIVE_STAFF_POSITIONS = 'RECEIVE_STAFF_POSITIONS';

export function requestUser() {
    return {
        type: REQUEST_USER
    }
}

export function receiveUser(data) {
    return {
        type: RECEIVE_USER,
        data: data
    }
}

export function requestAllUsers() {
    return {
        type: REQUEST_ALL_USERS
    }
}

export function receiveAllUsers(data) {
    return {
        type: RECEIVE_ALL_USERS,
        data: data
    }
}

export function requestCurrentUser() {
    return {
        type: REQUEST_CURRENT_USER
    }
}

export function receiveCurrentUser(data) {
    return {
        type: RECEIVE_CURRENT_USER,
        data: data
    }
}

export function requestStaffPositions() {
    return {
        type: REQUEST_STAFF_POSITIONS
    }
}

export function receiveStaffPositions(data) {
    return {
        type: RECEIVE_STAFF_POSITIONS,
        data: data
    }
}

export function fetchUser(identifier) {

    return function (dispatch) {
        dispatch(requestUser());

        StaffApi.get(identifier).then( data => {
            dispatch(receiveUser(data));
        });
    }
}

export function fetchAllUsers() {

    return function (dispatch) {
        dispatch(requestAllUsers());

        StaffApi.getAll().then( data => {
            dispatch(receiveAllUsers(data));
        });
    }
}

export function fetchCurrentUser() {

    return function (dispatch) {
        dispatch(requestCurrentUser());

        AuthApi.getCurrentUser().then( data => {
            dispatch(receiveCurrentUser(data));
        }).catch(() => {
            dispatch(receiveCurrentUser({}));
        });
    }
}

export function fetchStaffPositions() {

    return function (dispatch) {
        dispatch(requestStaffPositions());

        StaffApi.getPositions().then( data => {
            dispatch(receiveStaffPositions(data));
        });
    }
}

export function fetchInvitedUser(token) {

    return function (dispatch) {
        dispatch(requestUser());

        StaffApi.get_invite(token).then( data => {
            dispatch(receiveUser(data));
        });
    }
}
