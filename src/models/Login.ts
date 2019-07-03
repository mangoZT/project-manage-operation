/*
 * @Date: 2019-06-21 16:35:29
 * @Author: zhuhu
 * @LastEditors: zhuhu
 * @LastEditTime: 2019-07-03 15:35:04
 * @Description: 登录模型  返回登录对象
 */
import { observable, action } from "mobx";

interface IPostModel {
    userName:string;
    userPwd:string;
}

interface ILoginModel extends IPostModel {

}

class LoginModel implements LoginModel {
  @observable userName:string;
  @observable userPwd:string;

  constructor(userName:string, userPwd:string) {
    this.userName = userName;
    this.userPwd = userPwd;
  }
  
  // 登录需要的对象
  @action updateLoginModel(json:IPostModel) {
    this.userName = json.userName;
    this.userPwd = json.userPwd;
  }

  // 静态方法，创建新的LoginModel实例
  static fromJS(object:IPostModel) {
    return new LoginModel(
      object.userName,
      object.userPwd
    );
  }
}

export default LoginModel;
