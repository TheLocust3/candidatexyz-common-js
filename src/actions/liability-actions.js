import LiabilityApi from '../api/liability-api';

export const REQUEST_LIABILITY = 'REQUEST_LIABILITY';
export const RECEIVE_LIABILITY = 'RECEIVE_LIABILITY';
export const REQUEST_ALL_LIABILITIES = 'REQUEST_ALL_LIABILITIES';
export const RECEIVE_ALL_LIABILITIES = 'RECEIVE_ALL_LIABILITIES';

export function requestLiability() {
    return {
        type: REQUEST_LIABILITY
    }
}

export function receiveLiability(data) {
    return {
        type: RECEIVE_LIABILITY,
        data: data
    }
}

export function requestAllLiabilities() {
    return {
        type: REQUEST_ALL_LIABILITIES
    }
}

export function receiveAllLiabilities(data) {
    return {
        type: RECEIVE_ALL_LIABILITIES,
        data: data
    }
}

export function fetchAllLiabilities() {

    return function (dispatch) {
        dispatch(requestAllLiabilities());

        LiabilityApi.getAll().then( data => {
            dispatch(receiveAllLiabilities(data));
        });
    }
}

export function fetchLiability(id) {

    return function (dispatch) {
        dispatch(requestLiability());

        LiabilityApi.get(id).then( data => {
            dispatch(receiveLiability(data));
        });
    }
}
