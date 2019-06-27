/*
 * @Date: 2019-06-21 16:47:31
 * @Author: zhuhu
 * @LastEditors: zhuhu
 * @LastEditTime: 2019-06-24 20:18:55
 * @Description: 权限store
 */

import { observable, action } from "mobx";

class AuthStore {
  api;
  appStore;
  @observable username;
  @observable password;

  constructor(api, appStore) {
    this.api = api;
    this.appStore = appStore;
  }

  @action setUsername(username) {
    this.username = username;
  }

  @action setPassword(password) {
    this.password = password;
  }

  @action login() {
    this.appStore.increaseRequest();
    const params = { username: this.username, password: this.password };
    return this.api.login(params).then(action(data => {
      this.appStore.decreaseRequest();
      if (!data.error) {
        return Promise.resolve();
      } else {
        this.appStore.setError(data.error);
        return Promise.reject();
      }
    }));
  }
}

export default AuthStore;