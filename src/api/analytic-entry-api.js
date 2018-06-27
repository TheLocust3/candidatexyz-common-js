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

    aggregateBy(start, end, by) {
        return new Promise((resolve, reject) => {
            volunteerApi(`/analytic_entries/aggregate?start=${start}&end=${end}&by=${by}`, {
                type: 'get',
                success: resolve,
                error: reject
            });
        });
    },

    pageView() {
        if (window.sessionStorage.getItem('viewed?') == 'yes') return;
        window.sessionStorage.setItem('viewed?', 'yes');

        return volunteerApi('/ip', {
            type: 'get'
        }).then((response) => {
            return this.create(response.ip, { type: 'VIEW' });
        });
    },

    create(ip, payload) {
        return new Promise((resolve, reject) => {
            volunteerApi('/analytic_entries', {
                type: 'post',
                data: { ip: ip, payload: payload },
                success: resolve,
                error: reject
            });
        });
    },

    update(id, ip, payload) {
        return new Promise((resolve, reject) => {
            volunteerApi(`/analytic_entries/${id}`, {
                type: 'patch',
                data: { ip: ip, payload: payload },
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
