/*
 * @Date: 2019-06-20 14:41:11
 * @Author: zhuhu
 * @LastEditors: zhuhu
 * @LastEditTime: 2019-06-27 16:19:10
 * @Description: store集合
 */

import AppStore from "@stores/AppStore";
import AuthStore from "@stores/AuthStore";
import apis from "@apis/index";


const appStore = new AppStore();
const authStore = new AuthStore(apis, appStore);

const stores = {
  appStore,
  authStore
};

export default stores;