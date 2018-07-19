import { volunteerApi, createAuthHeadersString } from '../helpers';
import { volunteerApiDomain } from '../constants';

let ExpenditureApi = {

    getAll() {
        return new Promise((resolve, reject) => {
            volunteerApi('/expenditures', {
                type: 'get',
                success: resolve,
                error: reject
            });
        });
    },

    get(id) {
        return new Promise((resolve, reject) => {
            volunteerApi(`/expenditures/${id}`, {
                type: 'get',
                success: resolve,
                error: reject
            });
        });
    },

    create(paidTo, purpose, address, city, state, country, datePaid, amount) {
        return new Promise((resolve, reject) => {
            volunteerApi('/expenditures', {
                type: 'post',
                data: { paid_to: paidTo, purpose: purpose, address: address, city: city, state: state, country: country, date_paid: datePaid, amount: amount },
                success: resolve,
                error: reject
            });
        });
    },

    update(id, paidTo, purpose, address, city, state, country, datePaid, amount) {
        return new Promise((resolve, reject) => {
            volunteerApi(`/expenditures/${id}`, {
                type: 'patch',
                data: { paid_to: paidTo, purpose: purpose, address: address, city: city, state: state, country: country, date_paid: datePaid, amount: amount },
                success: resolve,
                error: reject
            });
        });
    },

    destroy(id) {
        return new Promise((resolve, reject) => {
            volunteerApi(`/expenditures/${id}`, {
                type: 'delete',
                success: resolve,
                error: reject
            });
        });
    },

    exportLink() {
        return `${volunteerApiDomain()}/expenditures/export.csv?${createAuthHeadersString()}`;
    }
};

export default ExpenditureApi;
