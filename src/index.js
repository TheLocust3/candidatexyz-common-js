import 'babel-polyfill';
import $ from 'jquery';
import * as Auth from 'j-toker';

import { userApiDomain, DOMAIN } from './constants';

$.ajaxSetup({
    beforeSend: function(xhr, settings) {
        $.auth.appendAuthHeaders(xhr, settings);
    }
});

export let campaignId = '';
export function setCampaignId(id) {
    campaignId = id;
}

export let developmentRoutes = false;
export function configure(options) {
    developmentRoutes = options.developmentRoutes;

    $.auth.configure({ // update apiUrl
        apiUrl: userApiDomain(),
        passwordResetSuccessUrl: () => { return `${DOMAIN}/reset_password` },
        storage: 'cookies',
        cookieExpiry: 14
    });
}

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
export let UserApi = ApiStaff; // call it whatever you want, I don't care
export let VolunteerApi = ApiVolunteer;

import * as ActionsCampaign from './actions/campaign-actions';
import * as ActionsMessage from './actions/message-actions';
import * as ActionsStaff from './actions/staff-actions';
import * as ActionsContact from './actions/contact-actions';
import * as ActionsVolunteer from './actions/volunteer-actions';

export let CampaignActions = ActionsCampaign;
export let MessageActions = ActionsMessage;
export let StaffActions = ActionsStaff;
export let UserActions = ActionsStaff; // call it whatever you want, I don't care
export let ContactActions = ActionsContact;
export let VolunteerActions = ActionsVolunteer;

import * as StaffReducers from './reducers/staff-reducer';
import * as CampaignReducer from './reducers/campaign-reducer';
import * as ContactReducer from './reducers/contact-reducer';
import * as VolunteerReducer from './reducers/volunteer-reducer';
import * as MessageReducer from './reducers/message-reducer';

export let staffReducer = StaffReducers.staffReducer;
export let userReducer = StaffReducers.staffReducer; // call it whatever you want, I don't care
export let campaignReducer = CampaignReducer.campaignReducer;
export let contactReducer = ContactReducer.contactReducer;
export let volunteerReducer = VolunteerReducer.volunteerReducer;
export let messageReducer = MessageReducer.messageReducer;
