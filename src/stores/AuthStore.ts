/*
 * @Date: 2019-06-21 16:47:31
 * @Author: zhuhu
 * @LastEditors: zhuhu
 * @LastEditTime: 2019-07-15 17:09:45
 * @Description: 登录权限store
 */

import { observable, action } from "mobx";
import { IAppStore, IApis } from "common-module";

class AuthStore {
  private api:IApis;
  private appStore:IAppStore;
  @observable userName:string="hu.zhu";
  @observable password:string;

  constructor(api:IApis, appStore:IAppStore) {
    this.api = api;
    this.appStore = appStore;
  }

  @action setuserName(userName:string) {
    this.userName = userName;
  }

  @action setPassword(password:string) {
    this.password = password;
  }

  @action login() {
    this.appStore.increaseRequest();
    const params = { userName: this.userName, password: this.password };
    return this.api.login(params).then(action((data:any) => {
      this.appStore.decreaseRequest();
      if (!data.error) {
        return Promise.resolve();
      } else {
        // this.appStore.setError(data.error);
        return Promise.reject();
      }
    }));
  }
}

export default AuthStore;
