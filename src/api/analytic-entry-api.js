import $ from 'jquery';

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
        // TODO: This address also randomly responds with 'Impeach Trump' and other stuff
        return $.get('http://jsonip.com/?callback=?', (response) => {
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
