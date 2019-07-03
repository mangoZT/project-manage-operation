/*
 * @Date: 2019-06-20 14:32:41
 * @Author: zhuhu
 * @LastEditors: zhuhu
 * @LastEditTime: 2019-07-03 15:23:25
 * @Description: 系统store  控制是否在loading，是否发生错误
 */

import { observable, computed, action } from "mobx";

class AppStore {
  @observable requestQuantity = 0;
  @observable error:string = null;
  
  @computed get isLoading() {
    return this.requestQuantity > 0;
  }
  
  // 当前进行的请求数量加1
  @action increaseRequest() {
    this.requestQuantity ++;
  }

  // 当前进行的请求数量减1
  @action decreaseRequest() {
    if(this.requestQuantity > 0)
      this.requestQuantity --;
  }

//   // 设置错误信息
//   @action setError(error) {
//     this.error = error;
//   }

//   // 删除错误信息
//   @action.bound removeError() {
//     this.error = null;
//   }
}

export default AppStore;