import { developmentRoutes } from './index';

export function websiteDomain() {
    return developmentRoutes ? 'http://127.0.0.1:3001' : 'https://demo.candidatexyz.com';
}

export function volunteerApiDomain() {
    return developmentRoutes ? 'http://127.0.0.1:3002' : 'https://api.candidatexyz.com';
}

export function userApiDomain() {
    return developmentRoutes ? 'http://127.0.0.1:3003' : 'https://auth.candidatexyz.com';
}

export function mailerApiDomain() {
    return developmentRoutes ? 'http://127.0.0.1:3004' : 'https://mailer.candidatexyz.com';
}
