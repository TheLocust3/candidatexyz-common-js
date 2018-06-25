import CampaignApi from '../api/campaign-api';

export const REQUEST_CAMPAIGN = 'REQUEST_CAMPAIGN';
export const RECEIVE_CAMPAIGN = 'RECEIVE_CAMPAIGN';

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
