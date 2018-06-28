import { mailerApi } from '../helpers';

let UnsubscribeApi = {

    unsubscribe(token) {
        return new Promise((resolve, reject) => {
            mailerApi('/unsubscribe', {
                type: 'post',
                data: { token: token },
                success: resolve,
                error: reject
            });
        });
    }
};

export default UnsubscribeApi;
