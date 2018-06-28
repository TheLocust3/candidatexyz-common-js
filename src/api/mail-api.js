import { websiteDomain } from '../constants';
import { volunteerApi, mailerApi } from '../helpers';

let MailApi = {

    sendToContacts(subject, body) {
        let fullBody = `
            ${body}

            <div class='footer'>
                <center>
                    Reading Democratic Committee<br /><br />

                    If you believe you received this message in error or wish to no longer receive email from us, please <a href='[UNSUBSCRIBE]'>unsubscribe</a>.
                </center>
            </div>
        `;

        return new Promise((resolve, reject) => {
            volunteerApi('/contacts/send_email', {
                type: 'post',
                data: { subject: subject, body: fullBody },
                success: resolve,
                error: reject
            });
        });
    },

    sendEmail(email, subject, body, resourceType, resourceId) {
        let fullBody = `
            ${body}

            <div class='footer'>
                <center>
                    Reading Democratic Committee<br /><br />

                    If you believe you received this message in error or wish to no longer receive email from us, please <a href='[UNSUBSCRIBE]'>unsubscribe</a>.
                </center>
            </div>
        `;

        return new Promise((resolve, reject) => {
            mailerApi('/campaign', {
                type: 'post',
                data: { email: email, subject: subject, body: fullBody, resource_type: resourceType, resource_id: resourceId },
                success: resolve,
                error: reject
            });
        });
    }
};

export default MailApi;
