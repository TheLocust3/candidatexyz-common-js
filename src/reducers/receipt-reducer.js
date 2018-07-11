import * as ReceiptActions from '../actions/receipt-actions';

const initialState = {
    isReady: false,
    receipt: {},
    receipts: { receipts: [] }
};

export function receiptReducer(state = initialState, action) {
    switch (action.type) {
        case ReceiptActions.REQUEST_ALL_RECEIPT:
        case ReceiptActions.REQUEST_RECEIPT:
            return Object.assign({}, state, {
                isReady: false
            });
        case ReceiptActions.RECEIVE_RECEIPT:
            return Object.assign({}, state, {
                isReady: true,
                receipt: action.data
            });
        case ReceiptActions.RECEIVE_ALL_RECEIPTS:
            return Object.assign({}, state, {
                isReady: true,
                receipts: action.data
            });
        default:
            return state;
    }
}
