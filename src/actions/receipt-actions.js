import ReceiptApi from '../api/receipt-api';

export const REQUEST_RECEIPT = 'REQUEST_RECEIPT';
export const RECEIVE_RECEIPT = 'RECEIVE_RECEIPT';
export const REQUEST_ALL_RECEIPTS = 'REQUEST_ALL_RECEIPTS';
export const RECEIVE_ALL_RECEIPTS = 'RECEIVE_ALL_RECEIPTS';

export function requestReceipt() {
    return {
        type: REQUEST_RECEIPT
    }
}

export function receiveReceipt(data) {
    return {
        type: RECEIVE_RECEIPT,
        data: data
    }
}

export function requestAllReceipts() {
    return {
        type: REQUEST_ALL_RECEIPTS
    }
}

export function receiveAllReceipts(data) {
    return {
        type: RECEIVE_ALL_RECEIPTS,
        data: data
    }
}

export function fetchAllReceipts() {

    return function (dispatch) {
        dispatch(requestAllReceipts());

        ReceiptApi.getAll().then( data => {
            dispatch(receiveAllReceipts(data));
        });
    }
}

export function fetchReceipt(id) {

    return function (dispatch) {
        dispatch(requestReceipt());

        ReceiptApi.get(id).then( data => {
            dispatch(receiveReceipt(data));
        });
    }
}
