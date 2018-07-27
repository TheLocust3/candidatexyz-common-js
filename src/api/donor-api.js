import { volunteerApi } from '../helpers';

let DonorApi = {

    getAll() {
        return new Promise((resolve, reject) => {
            volunteerApi('/receipts', {
                type: 'get',
                success: resolve,
                error: reject
            });
        });
    },

    get(id) {
        return new Promise((resolve, reject) => {
            volunteerApi(`/receipts/${id}`, {
                type: 'get',
                success: resolve,
                error: reject
            });
        });
    }
};

export default DonorApi;
