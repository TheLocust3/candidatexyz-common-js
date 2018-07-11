import CampaignApi from '../api/campaign-api';

export const REQUEST_CAMPAIGN = 'REQUEST_CAMPAIGN';
export const RECEIVE_CAMPAIGN = 'RECEIVE_CAMPAIGN';
export const REQUEST_ALL_CAMPAIGNS = 'REQUEST_ALL_CAMPAIGNS';
export const RECEIVE_ALL_CAMPAIGNS = 'RECEIVE_ALL_CAMPAIGNS';

export function requestCampaign() {
    return {
        type: REQUEST_CAMPAIGN
    }
}

export function receiveCampaign(data) {
    return {
        type: RECEIVE_CAMPAIGN,
        data: data
    }
}

export function requestAllCampaigns() {
    return {
        type: REQUEST_ALL_CAMPAIGNS
    }
}

export function receiveAllCampaigns(data) {
    return {
        type: RECEIVE_ALL_CAMPAIGNS,
        data: data
    }
}

export function fetchCampaign(id) {
    return function (dispatch) {
        dispatch(requestCampaign());

        CampaignApi.get(id).then( data => {
            dispatch(receiveCampaign(data));
        });
    }
}

export function fetchCampaignByName(name) {

    return function (dispatch) {
        dispatch(requestCampaign());

        CampaignApi.getByName(name).then( data => {
            dispatch(receiveCampaign(data));
        });
    }
}

export function fetchAllCampaigns() {
    return function (dispatch) {
        dispatch(requestAllCampaigns());

        CampaignApi.getAll().then( data => {
            dispatch(receiveAllCampaigns(data));
        });
    }
}
