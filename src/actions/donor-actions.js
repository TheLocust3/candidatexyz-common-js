import DonorApi from '../api/donor-api';

export const REQUEST_DONOR = 'REQUEST_DONOR';
export const RECEIVE_DONOR = 'RECEIVE_DONOR';
export const REQUEST_ALL_DONORS = 'REQUEST_ALL_DONORS';
export const RECEIVE_ALL_DONORS = 'RECEIVE_ALL_DONORS';

export function requestDonor() {
    return {
        type: REQUEST_DONOR
    }
}

export function receiveDonor(data) {
    return {
        type: RECEIVE_DONOR,
        data: data
    }
}

export function requestAllDonors() {
    return {
        type: REQUEST_ALL_DONORS
    }
}

export function receiveAllDonors(data) {
    return {
        type: RECEIVE_ALL_DONORS,
        data: data
    }
}

export function fetchAllDonors() {

    return function (dispatch) {
        dispatch(requestAllDonors());

        DonorApi.getAll().then( data => {
            dispatch(receiveAllDonors(data));
        });
    }
}

export function fetchDonor(id) {

    return function (dispatch) {
        dispatch(requestDonor());

        DonorApi.get(id).then( data => {
            dispatch(receiveDonor(data));
        });
    }
}
