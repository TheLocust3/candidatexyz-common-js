import 'babel-polyfill';
import $ from 'jquery';
import * as Auth from 'j-toker';

import { userApiDomain, DOMAIN } from './constants';
import { addAuthHeaders } from './helpers';

$.ajaxSetup({
    beforeSend: function(xhr, settings) {
        $.auth.appendAuthHeaders(xhr, settings);
    }
});

export let campaignId = '';
export function setCampaignId(id) {
    campaignId = id;
}

export let addJTokerHeaders = addAuthHeaders;

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
import ApiAnalyticEntry from './api/analytic-entry-api';
import ApiImage from './api/image-api';
import ApiUnsubscribe from './api/unsubscribe-api';
import ApiReceipt from './api/receipt-api';
import ApiExpenditure from './api/expenditure-api';
import ApiInKind from './api/in-kind-api';
import ApiLiability from './api/liability-api';
import ApiReport from './api/report-api';
import ApiCommittee from './api/committee-api';

export let AuthApi = ApiAuth;
export let CampaignApi = ApiCampaign;
export let ContactApi = ApiContact;
export let MailApi = ApiMail;
export let MessageApi = ApiMessage;
export let StaffApi = ApiStaff;
export let UserApi = ApiStaff; // call it whatever you want, I don't care
export let VolunteerApi = ApiVolunteer;
export let AnalyticEntryApi = ApiAnalyticEntry;
export let ImageApi = ApiImage;
export let UnsubscribeApi = ApiUnsubscribe;
export let ReceiptApi = ApiReceipt;
export let ExpenditureApi = ApiExpenditure;
export let InKindApi = ApiInKind;
export let LiabilityApi = ApiLiability;
export let ReportApi = ApiReport;
export let CommitteeApi = ApiCommittee;


import * as ActionsCampaign from './actions/campaign-actions';
import * as ActionsMessage from './actions/message-actions';
import * as ActionsStaff from './actions/staff-actions';
import * as ActionsContact from './actions/contact-actions';
import * as ActionsVolunteer from './actions/volunteer-actions';
import * as ActionsAnalyticEntry from './actions/analytic-entry-actions';
import * as ActionsImage from './actions/image-actions';
import * as ActionsReceipt from './actions/receipt-actions';
import * as ActionsExpenditure from './actions/expenditure-actions';
import * as ActionsInKind from './actions/in-kind-actions';
import * as ActionsLiability from './actions/liability-actions';
import * as ActionsReport from './actions/report-actions';
import * as ActionsCommittee from './actions/committee-actions';

export let CampaignActions = ActionsCampaign;
export let MessageActions = ActionsMessage;
export let StaffActions = ActionsStaff;
export let UserActions = ActionsStaff; // call it whatever you want, I don't care
export let ContactActions = ActionsContact;
export let VolunteerActions = ActionsVolunteer;
export let AnalyticEntryActions = ActionsAnalyticEntry;
export let ImageActions = ActionsImage;
export let ReceiptActions = ActionsReceipt;
export let ExpenditureActions = ActionsExpenditure;
export let InKindActions = ActionsInKind;
export let LiabilityActions = ActionsLiability;
export let ReportActions = ActionsReport;
export let CommitteeActions = ActionsCommittee;


import * as StaffReducers from './reducers/staff-reducer';
import * as CampaignReducer from './reducers/campaign-reducer';
import * as ContactReducer from './reducers/contact-reducer';
import * as VolunteerReducer from './reducers/volunteer-reducer';
import * as MessageReducer from './reducers/message-reducer';
import * as AnalyticEntryReducer from './reducers/analytic-entry-reducer';
import * as ImageReducer from './reducers/image-reducer';
import * as ReceiptReducer from './reducers/receipt-reducer';
import * as ExpenditureReducer from './reducers/expenditure-reducer';
import * as InKindReducer from './reducers/in-kind-reducer';
import * as LiabilityReducer from './reducers/liability-reducer';
import * as ReportReducer from './reducers/report-reducer';
import * as CommitteeReducer from './reducers/committee-reducer';

export let staffReducer = StaffReducers.staffReducer;
export let userReducer = StaffReducers.staffReducer; // call it whatever you want, I don't care
export let campaignReducer = CampaignReducer.campaignReducer;
export let contactReducer = ContactReducer.contactReducer;
export let volunteerReducer = VolunteerReducer.volunteerReducer;
export let messageReducer = MessageReducer.messageReducer;
export let analyticEntryReducer = AnalyticEntryReducer.analyticEntryReducer;
export let imageReducer = ImageReducer.imageReducer;
export let receiptReducer = ReceiptReducer.receiptReducer;
export let expenditureReducer = ExpenditureReducer.expenditureReducer;
export let inKindReducer = InKindReducer.inKindReducer;
export let liabilityReducer = LiabilityReducer.liabilityReducer;
export let reportReducer = ReportReducer.reportReducer;
export let committeeReducer = CommitteeReducer.committeeReducer;

import HelperDonor from './helpers/donor-helper';

export let DonorHelper = HelperDonor;
