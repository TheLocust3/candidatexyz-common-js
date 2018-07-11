import { setCampaignId } from '../index';

import * as CampaignActions from '../actions/campaign-actions';

const initialState = {
    isReady: false,
    campaign: {},
    campaigns: []
};

export function campaignReducer(state = initialState, action) {
    switch (action.type) {
        case CampaignActions.REQUEST_ALL_CAMPAIGNS:
        case CampaignActions.REQUEST_CAMPAIGN:
            return Object.assign({}, state, {
                isReady: false
            });
        case CampaignActions.RECEIVE_CAMPAIGN:
            setCampaignId(action.data.id);

            return Object.assign({}, state, {
                isReady: true,
                campaign: action.data
            });
        case CampaignActions.RECEIVE_ALL_CAMPAIGNS:
            return Object.assign({}, state, {
                isReady: true,
                campaigns: action.data
            });
        default:
            return state;
    }
}
