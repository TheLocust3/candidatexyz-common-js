import { volunteerApi } from '../helpers';

let ReportApi = {

    getAll() {
        return new Promise((resolve, reject) => {
            volunteerApi('/reports', {
                type: 'get',
                success: resolve,
                error: reject
            });
        });
    },

    get(id) {
        return new Promise((resolve, reject) => {
            volunteerApi(`/reports/${id}`, {
                type: 'get',
                success: resolve,
                error: reject
            });
        });
    },

    getReportTypes() {
        return new Promise((resolve, reject) => {
            volunteerApi('/report_types', {
                type: 'get',
                success: resolve,
                error: reject
            });
        });
    },

    create(reportType, beginningDate, endingDate) {
        return new Promise((resolve, reject) => {
            volunteerApi('/reports', {
                type: 'post',
                data: { report_type: reportType, beginning_date: beginningDate, ending_date: endingDate },
                success: resolve,
                error: reject
            });
        });
    },

    destroy(id) {
        return new Promise((resolve, reject) => {
            volunteerApi(`/reports/${id}`, {
                type: 'delete',
                success: resolve,
                error: reject
            });
        });
    }
};

export default ReportApi;
