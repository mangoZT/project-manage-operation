import { observable, action } from "mobx";

interface PostModel {
    userName:string;
    userPwd:string;
}

interface LoginModel extends PostModel {

}

class LoginModel implements LoginModel {
  @observable userName:string;
  @observable userPwd:string;

  constructor(userName:string, userPwd:string) {
    this.userName = userName;
    this.userPwd = userPwd;
  }
  
  // 登录需要的对象
  @action updateLoginModel(json:PostModel) {
    this.userName = json.userName;
    this.userPwd = json.userPwd;
  }

  // 静态方法，创建新的LoginModel实例
  static fromJS(object:PostModel) {
    return new LoginModel(
      object.userName,
      object.userPwd
    );
  }
}

export default PostModel;
