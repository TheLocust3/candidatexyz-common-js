var babel = require("babel-core");
import { transform } from 'babel-core';
import * as babel from 'babel-core';

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

import * as Auth from './api/auth-api';
import * as Campaign from './api/campaign-api';
import * as Contact from './api/contact-api';
import * as Mail from './api/content-api';
import * as Message from './api/message-api';
import * as Staff from './api/staff-api';
import * as Volunteer from './api/volunteer-api';

export let AuthApi = Auth;
export let CampaignApi = Campaign;
export let ContactApi = Contact;
export let MailApi = Mail;
export let MessageApi = Message;
export let StaffApi = Staff;
export let VolunteersApi = Volunteer;

export let campaignId = '';
export function setCampaignId(id) {
    campaignId = id;
}
