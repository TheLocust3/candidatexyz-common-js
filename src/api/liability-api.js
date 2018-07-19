import { volunteerApi, createAuthHeadersString } from '../helpers';
import { volunteerApiDomain } from '../constants';

let LiabilityApi = {

    getAll() {
        return new Promise((resolve, reject) => {
            volunteerApi('/liabilities', {
                type: 'get',
                success: resolve,
                error: reject
            });
        });
    },

    get(id) {
        return new Promise((resolve, reject) => {
            volunteerApi(`/liabilities/${id}`, {
                type: 'get',
                success: resolve,
                error: reject
            });
        });
    },

    create(toWhom, purpose, address, city, state, country, dateIncurred, amount) {
        return new Promise((resolve, reject) => {
            volunteerApi('/liabilities', {
                type: 'post',
                data: { to_whom: toWhom, purpose: purpose, address: address, city: city, state: state, country: country, date_incurred: dateIncurred, amount: amount },
                success: resolve,
                error: reject
            });
        });
    },

    update(id, toWhom, purpose, address, city, state, country, dateIncurred, amount) {
        return new Promise((resolve, reject) => {
            volunteerApi(`/liabilities/${id}`, {
                type: 'patch',
                data: { to_whom: toWhom, purpose: purpose, address: address, city: city, state: state, country: country, date_incurred: dateIncurred, amount: amount },
                success: resolve,
                error: reject
            });
        });
    },

    destroy(id) {
        return new Promise((resolve, reject) => {
            volunteerApi(`/liabilities/${id}`, {
                type: 'delete',
                success: resolve,
                error: reject
            });
        });
    },

    exportLink() {
        return `${volunteerApiDomain()}/liabilities/export.csv?${createAuthHeadersString()}`;
    }
};

export default LiabilityApi;
