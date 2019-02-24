import base from './util/base'
export const develop = true;
export const baseUrl = 'http://zjqs.jjrbs.cn';

export var isLogin = base.getCookie('ECO_USER_LOGIN_COOKIE_KEY') || ''; 
export const version = '2.6'