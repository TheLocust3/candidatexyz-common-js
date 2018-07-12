import * as InKindActions from '../actions/in-kind-actions';

const initialState = {
    isReady: false,
    inKind: {},
    inKinds: { inKinds: [] }
};

export function inKindReducer(state = initialState, action) {
    switch (action.type) {
        case InKindActions.REQUEST_ALL_IN_KINDS:
        case InKindActions.REQUEST_IN_KIND:
            return Object.assign({}, state, {
                isReady: false
            });
        case InKindActions.RECEIVE_IN_KIND:
            return Object.assign({}, state, {
                isReady: true,
                inKind: action.data
            });
        case InKindActions.RECEIVE_ALL_IN_KINDS:
            return Object.assign({}, state, {
                isReady: true,
                inKinds: action.data
            });
        default:
            return state;
    }
}
