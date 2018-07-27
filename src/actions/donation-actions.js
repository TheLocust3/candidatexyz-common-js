import DonationApi from '../api/donation-api';

export const REQUEST_ALL_DONATIONS = 'REQUEST_ALL_DONATIONS';
export const RECEIVE_ALL_DONATIONS = 'RECEIVE_ALL_DONATIONS';

export function requestAllDonations() {
    return {
        type: REQUEST_ALL_DONATIONS
    }
}

export function receiveAllDonations(data) {
    return {
        type: RECEIVE_ALL_DONATIONS,
        data: data
    }
}

export function fetchAllDonations() {

    return function (dispatch) {
        dispatch(requestAllDonations());

        DonationApi.getAll().then( data => {
            dispatch(receiveAllDonations(data));
        });
    }
}
