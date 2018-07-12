import ExpenditureApi from '../api/expenditure-api';

export const REQUEST_EXPENDITURE = 'REQUEST_EXPENDITURE';
export const RECEIVE_EXPENDITURE = 'RECEIVE_EXPENDITURE';
export const REQUEST_ALL_EXPENDITURES = 'REQUEST_ALL_EXPENDITURES';
export const RECEIVE_ALL_EXPENDITURES = 'RECEIVE_ALL_EXPENDITURES';

export function requestExpenditure() {
    return {
        type: REQUEST_EXPENDITURE
    }
}

export function receiveExpenditure(data) {
    return {
        type: RECEIVE_EXPENDITURE,
        data: data
    }
}

export function requestAllExpenditures() {
    return {
        type: REQUEST_ALL_EXPENDITURES
    }
}

export function receiveAllExpenditures(data) {
    return {
        type: RECEIVE_ALL_EXPENDITURES,
        data: data
    }
}

export function fetchAllExpenditures() {

    return function (dispatch) {
        dispatch(requestAllExpenditures());

        ExpenditureApi.getAll().then( data => {
            dispatch(receiveAllExpenditures(data));
        });
    }
}

export function fetchExpenditure(id) {

    return function (dispatch) {
        dispatch(requestExpenditure());

        ExpenditureApi.get(id).then( data => {
            dispatch(receiveExpenditure(data));
        });
    }
}
