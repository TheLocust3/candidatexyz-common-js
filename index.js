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

import * as AuthApi from './api/auth-api';
import * as CampaignApi from './api/campaign-api';
import * as ContactApi from './api/contact-api';
import * as MailApi from './api/content-api';
import * as MessageApi from './api/message-api';
import * as StaffApi from './api/staff-api';
import * as VolunteersApi from './api/volunteer-api';

module.exports = {}

module.exports.AuthApi = AuthApi;
module.exports.CampaignApi = CampaignApi;
module.exports.ContactApi = ContactApi;
module.exports.MailApi = MailApi;
module.exports.MessageApi = MessageApi;
module.exports.StaffApi = StaffApi;
module.exports.VolunteersApi = VolunteersApi;

export let campaignId = '';
export function setCampaignId(id) {
    campaignId = id;
}

module.exports.campaignId = campaignId;
module.exports.setCampaignId = setCampaignId;
