/*
 * @Date: 2019-06-20 14:41:11
 * @Author: zhuhu
 * @LastEditors: zhuhu
 * @LastEditTime: 2019-07-15 18:56:57
 * @Description: store集合
 */

import AppStore from "@stores/AppStore";
import AuthStore from "@stores/AuthStore";
import ProjectStore from "@stores/ProjectStore";
import apis from "@apis/index";


const appStore = new AppStore();
const authStore = new AuthStore(apis, appStore);
const projectStore = new ProjectStore(apis, appStore);

const stores = {
  appStore,
  authStore,
  projectStore
};

export default stores;