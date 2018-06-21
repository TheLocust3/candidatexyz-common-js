import 'babel-polyfill';
import $ from 'jquery';
import * as Auth from 'j-toker';

import { USER_API_DOMAIN, DOMAIN } from './constants';

$.ajaxSetup({
    beforeSend: function(xhr, settings) {
        $.auth.appendAuthHeaders(xhr, settings);
    }
});

$.auth.configure({
    apiUrl: USER_API_DOMAIN,
    passwordResetSuccessUrl: () => { return `${DOMAIN}/reset_password` },
    storage: 'cookies',
    cookieExpiry: 14
});

// not a very big fan of this import/export naming thing
import ApiAuth from './api/auth-api';
import ApiCampaign from './api/campaign-api';
import ApiContact from './api/contact-api';
import ApiMail from './api/mail-api';
import ApiMessage from './api/message-api';
import ApiStaff from './api/staff-api';
import ApiVolunteer from './api/volunteer-api';

export let AuthApi = ApiAuth;
export let CampaignApi = ApiCampaign;
export let ContactApi = ApiContact;
export let MailApi = ApiMail;
export let MessageApi = ApiMessage;
export let StaffApi = ApiStaff;
export let VolunteerApi = ApiVolunteer;

export let campaignId = '';
export function setCampaignId(id) {
    campaignId = id;
}

import * as ActionsCampaign from './actions/campaign-actions';
import * as ActionsMessage from './actions/message-actions';
import * as ActionsStaff from './actions/staff-actions';
import * as ActionsContact from './actions/contact-actions';
import * as ActionsVolunteer from './actions/volunteer-actions';

export let CampaignActions = ActionsCampaign;
export let MessageActions = ActionsMessage;
export let StaffActions = ActionsStaff;
export let ContactActions = ActionsContact;
export let VolunteerActions = ActionsVolunteer;

import { staffReducer } from './reducers/staff-reducer';
import { campaignReducer } from './reducers/campaign-reducer';
import { contactReducer } from './reducers/contact-reducer';
import { volunteerReducer } from './reducers/volunteer-reducer';
import { messageReducer } from './reducers/message-reducer';

export let staffReducer = staffReducer;
export let campaignReducer = campaignReducer;
export let contactReducer = contactReducer;
export let volunteerReducer = volunteerReducer;
export let messageReducer = messageReducer;
