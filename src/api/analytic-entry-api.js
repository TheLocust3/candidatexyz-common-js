import { volunteerApi } from '../helpers';

let AnalyticEntryApi = {

    getAll() {
        return new Promise((resolve, reject) => {
            volunteerApi('/analytic_entries', {
                type: 'get',
                success: resolve,
                error: reject
            });
        });
    },

    get(id) {
        return new Promise((resolve, reject) => {
            volunteerApi(`/analytic_entries/${id}`, {
                type: 'get',
                success: resolve,
                error: reject
            });
        });
    },

    pageView() {
        return $.get('http://ipinfo.io', (response) => {
            return create({ type: 'VIEW', ip: response.ip });
        });
    },

    create(payload) {
        return new Promise((resolve, reject) => {
            volunteerApi('/analytic_entries', {
                type: 'post',
                data: { payload: payload },
                success: resolve,
                error: reject
            });
        });
    },

    update(id, payload) {
        return new Promise((resolve, reject) => {
            volunteerApi(`/analytic_entries/${id}`, {
                type: 'patch',
                data: { payload: payload },
                success: resolve,
                error: reject
            });
        });
    },

    destroy(id) {
        return new Promise((resolve, reject) => {
            volunteerApi(`/analytic_entries/${id}`, {
                type: 'delete',
                success: resolve,
                error: reject
            });
        });
    }
};

export default AnalyticEntryApi;
