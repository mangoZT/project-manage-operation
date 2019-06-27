/*
 * @Date: 2019-06-20 14:21:25
 * @Author: zhuhu
 * @LastEditors: zhuhu
 * @LastEditTime: 2019-06-24 20:20:32
 * @Description: 数据请求工具类
 */

import md5 from 'blueimp-md5';
import 'whatwg-fetch';
import { getConfig } from "@utils/config";

const initConfig = getConfig();

const getSign = str => md5(str + initConfig.application).toLocaleUpperCase();

class Functor {
    constructor(value) {
        this.value = value;
    }
    map(fn, ...rest) {
        return new Functor(fn(this.value, ...rest));
    }
}

const setHeaders = ({ headers, ...rest }, initialHeaders) => {
    return {
        headers: {
            ...headers,
            ...initialHeaders
        },
        ...rest
    };
};

const formatData = ({ method, data }, initialHeaders, getSign) => {
    if (/upload/i.test(method)) {
        return {
            method: 'post',
            body: data
        };
    } else if (/post/i.test(method)) {
        const newData = {
            data: data,
            system: {
                ...initialHeaders
            }
        };
        const body = {
            sign: getSign(newData),
            ...newData
        };
        return {
            method,
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(body)
        };
    }
    return {
        method,
        headers: {
            "Content-Type": 'application/json'
        }
    };
};

async function requestDataProcess(url, options) {
    const newOptions = new Functor(options)
        .map(formatData, initConfig, getSign)
        .map(setHeaders, initConfig )
        .value;

    const result = await fetch(`/api${url}`, newOptions).then(res => res.json());
    return result;
}

export default async function request(url, options) {
    return requestDataProcess(url, options);
}
