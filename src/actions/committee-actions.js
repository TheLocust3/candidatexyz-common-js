import CommitteeApi from '../api/committee-api';

export const REQUEST_COMMITTEE = 'REQUEST_COMMITTEE';
export const RECEIVE_COMMITTEE = 'RECEIVE_COMMITTEE';
export const REQUEST_ALL_COMMITTEES = 'REQUEST_ALL_COMMITTEES';
export const RECEIVE_ALL_COMMITTEES = 'RECEIVE_ALL_COMMITTEES';

export function requestCommittee() {
    return {
        type: REQUEST_COMMITTEE
    }
}

export function receiveCommittee(data) {
    return {
        type: RECEIVE_COMMITTEE,
        data: data
    }
}

export function requestAllCommittees() {
    return {
        type: REQUEST_ALL_COMMITTEES
    }
}

export function receiveAllCommittees(data) {
    return {
        type: RECEIVE_ALL_COMMITTEES,
        data: data
    }
}

export function fetchAllCommittees() {

    return function (dispatch) {
        dispatch(requestAllCommittees());

        CommitteeApi.getAll().then( data => {
            dispatch(receiveAllCommittees(data));
        });
    }
}

export function fetchCommittee(id) {

    return function (dispatch) {
        dispatch(requestCommittee());

        CommitteeApi.get(id).then( data => {
            dispatch(receiveCommittee(data));
        });
    }
}

export function fetchCommitteeByCampaign() {

    return function (dispatch) {
        dispatch(requestCommittee());

        CommitteeApi.committeeByCampaign().then( data => {
            dispatch(receiveCommittee(data));
        });
    }
}
