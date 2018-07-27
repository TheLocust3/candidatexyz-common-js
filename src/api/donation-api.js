import { volunteerApi } from '../helpers';

let DonationApi = {

    getAll() {
        return new Promise((resolve, reject) => {
            volunteerApi('/donations', {
                type: 'get',
                success: resolve,
                error: reject
            });
        });
    }
};

export default DonationApi;
