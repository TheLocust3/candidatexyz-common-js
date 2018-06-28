import $ from 'jquery';
import _ from 'lodash';

import { campaignId } from './index';
import { volunteerApiDomain, userApiDomain, mailerApiDomain } from './constants';

// Stolen from https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
export function uuid() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    )
}

export function volunteerApi(url, hash) {
    let { data, ...otherPart } = hash;
    data = { ...data, campaign_id: campaignId }

    return $.ajax(`${volunteerApiDomain()}${url}`, {
        beforeSend: (xhr, settings) => {
            addAuthHeaders(xhr);
        },
        data: data,
        ...otherPart
    });
}

export function userApi(url, hash) {
    return $.ajax(`${userApiDomain()}${url}`, {
        beforeSend: (xhr, settings) => {
            addAuthHeaders(xhr);
        },
        ...hash
    });
}

export function mailerApi(url, hash) {
    return $.ajax(`${mailerApiDomain()}${url}`, {
        beforeSend: (xhr, settings) => {
            addAuthHeaders(xhr);
        },
        ...hash
    });
}

export function addAuthHeaders(xhr) { // attach authentication headers to request, modified from https://github.com/lynndylanhurley/j-toker/blob/0f76481813c6a20642de0756c5077da338ac4a0b/src/j-toker.js#L1172
    let currentHeaders = $.auth.retrieveData('authHeaders');
    if (_.isUndefined(currentHeaders)) {
        return;
    }

    for (var key in $.auth.getConfig().tokenFormat) {
        xhr.setRequestHeader(key, currentHeaders[key]);
    }
}
