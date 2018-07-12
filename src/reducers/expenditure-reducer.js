import * as ExpenditureActions from '../actions/expenditure-actions';

const initialState = {
    isReady: false,
    expenditure: {},
    expenditures: { expenditures: [] }
};

export function expenditureReducer(state = initialState, action) {
    switch (action.type) {
        case ExpenditureActions.REQUEST_ALL_EXPENDITURES:
        case ExpenditureActions.REQUEST_EXPENDITURE:
            return Object.assign({}, state, {
                isReady: false
            });
        case ExpenditureActions.RECEIVE_EXPENDITURE:
            return Object.assign({}, state, {
                isReady: true,
                expenditure: action.data
            });
        case ExpenditureActions.RECEIVE_ALL_EXPENDITURES:
            return Object.assign({}, state, {
                isReady: true,
                expenditures: action.data
            });
        default:
            return state;
    }
}
