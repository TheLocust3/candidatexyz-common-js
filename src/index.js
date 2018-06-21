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
import ApiAuth from 'api/auth-api';
import ApiCampaign from 'api/campaign-api';
import ApiContact from 'api/contact-api';
import ApiMail from 'api/content-api';
import ApiMessage from 'api/message-api';
import ApiStaff from 'api/staff-api';
import ApiVolunteer from 'api/volunteer-api';

export let AuthApi = ApiAuth;
export let CampaignApi = ApiCampaign;
export let ContactApi = ApiContact;
export let MailApi = ApiMail;
export let MessageApi = ApiMessage;
export let StaffApi = ApiStaff;
export let VolunteersApi = ApiVolunteer;

export let campaignId = '';
export function setCampaignId(id) {
    campaignId = id;
}
