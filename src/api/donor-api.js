import { volunteerApi } from '../helpers';

let DonorApi = {

    getAll() {
        return new Promise((resolve, reject) => {
            volunteerApi('/donors', {
                type: 'get',
                success: resolve,
                error: reject
            });
        });
    },

    get(name) {
        return new Promise((resolve, reject) => {
            volunteerApi(`/donors/${name}`, {
                type: 'get',
                success: resolve,
                error: reject
            });
        });
    }
};

export default DonorApi;
