/*
 * @Date: 2019-06-24 20:28:08
 * @Author: zhuhu
 * @LastEditors: zhuhu
 * @LastEditTime: 2019-07-03 15:34:07
 * @Description: 所有API集合
 */

import request from "@utils/request";

interface ILoginData{
    userName:string
    password:string
}

export default {
  login: (data:ILoginData) => request('', data)
};
