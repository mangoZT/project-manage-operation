/*
 * @Date: 2019-06-24 20:28:08
 * @Author: zhuhu
 * @LastEditors: zhuhu
 * @LastEditTime: 2019-07-15 17:09:18
 * @Description: 所有API集合
 */

import request from "@utils/request";
import {IApis} from "common-module";

interface ILoginData{
    userName:string
    password:string
}

const apis:IApis = {
  login: (data:ILoginData) => request('', data)
};
export default apis;