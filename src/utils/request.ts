/*
 * @Date: 2019-06-20 14:21:25
 * @Author: zhuhu
 * @LastEditors: zhuhu
 * @LastEditTime: 2019-07-03 15:26:50
 * @Description: 数据请求工具类
 */

import md5 from 'blueimp-md5';
import 'whatwg-fetch';
import { getConfig } from "@utils/config";

const initConfig = getConfig();

type sign= (param:any) => {

}

const getSign:sign = (params:string) => md5(params + initConfig.application).toLocaleUpperCase();

class Functor {
    value:string
    constructor(value:string) {
        this.value = value;
    }
    map(fn:any, ...rest:any[]) {
        return new Functor(fn(this.value, ...rest));
    }
}

type setHeadersParams = {
    headers:any,
    rest:any[]
}
const setHeaders = ({ headers, ...rest }:setHeadersParams, initialHeaders:any) => {
    return {
        headers: {
            ...headers,
            ...initialHeaders
        },
        ...rest
    };
};

type formatDataParam = {
    method:string,
    data:any
}
const formatData = ({ method, data }:formatDataParam, initialHeaders:any, getSign:sign) => {
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

async function requestDataProcess(url:string, options:any) {
    const newOptions:any = new Functor(options)
        .map(formatData, initConfig, getSign)
        .map(setHeaders, initConfig )
        .value;

    const result = await fetch(`/api${url}`, newOptions).then(res => res.json());
    return result;
}

export default async function request(url:string, options:any) {
    return requestDataProcess(url, options);
}
