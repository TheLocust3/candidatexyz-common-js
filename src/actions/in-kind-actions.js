import InKindApi from '../api/in-kind-api';

export const REQUEST_IN_KIND = 'REQUEST_IN_KIND';
export const RECEIVE_IN_KIND = 'RECEIVE_IN_KIND';
export const REQUEST_ALL_IN_KINDS = 'REQUEST_ALL_IN_KINDS';
export const RECEIVE_ALL_IN_KINDS = 'RECEIVE_ALL_IN_KINDS';

export function requestInKind() {
    return {
        type: REQUEST_IN_KIND
    }
}

export function receiveInKind(data) {
    return {
        type: RECEIVE_IN_KIND,
        data: data
    }
}

export function requestAllInKinds() {
    return {
        type: REQUEST_ALL_IN_KINDS
    }
}

export function receiveAllInKinds(data) {
    return {
        type: RECEIVE_ALL_IN_KINDS,
        data: data
    }
}

export function fetchAllInKinds() {

    return function (dispatch) {
        dispatch(requestAllInKinds());

        InKindApi.getAll().then( data => {
            dispatch(receiveAllInKinds(data));
        });
    }
}

export function fetchInKind(id) {

    return function (dispatch) {
        dispatch(requestInKind());

        InKindApi.get(id).then( data => {
            dispatch(receiveInKind(data));
        });
    }
}
