/*
 * @Date: 2019-06-24 11:41:03
 * @Author: zhuhu
 * @LastEditors: zhuhu
 * @LastEditTime: 2019-06-27 16:44:05
 * @Description: 数据请求头配置文件
 */

let config = {
    "version": "1.0.0",
    "application": "Project-System",
};

const setConfig = (current:any) => {
    config = {
        ...config,
        ...current
    };
};

const getConfig = () => {
    //
    return config;
};

export {
    getConfig,
    setConfig
};
