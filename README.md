#项目名称
project-manage-operation（项目管理系统）


#项目简介
完全基于ts语法的项目，主要由react+mobx+webpack+typescript
##目录说明
###src/apis  数据请求API集合
###src/components   组件库
###src/images  图片目录
###src/models  模型目录  
###src/pages   页面目录
###src/stores   store集合
###src/utils    工具库（移植的需改为TS）
PS：未需要使用任何babel的特性之前，不得添加babel相关包
PS：css-loader不要升到大版本3


#项目功能
登录：目前支持ldap账号登录，后期转为SSO，使用oms登录
UI管理：管理小鲸喜小程序项目的UI设计稿，记录时间、上传邮件通知、在线预览
打点管理：管理小鲸喜小程序项目的打点记录，记录新建，变动时间和人员，邮件通知开发人员
PS：其他功能后续添加



#快速启动
.yarn 安装所需要的依赖包

2.npm run start  启动项目http://localhost:8080/

3.npm run build  打包项目 dist目录下


#开发规范
1.必须使用react新特性hooks函数式组件，非特殊不得使用class组件
2.每个模块必须新建自己的store，有model必须新建model
3.规范使用ts类型进行开发，尽量减少any类型
4.所有页面背景使用compnoents/layouts下的UI组件，没有则新建
5.所有页面使用页头注释，函数使用函数注释，模板如下（使用korofileheader类型插件）：
## 页头注释 主要包括创建时间、人、描述    最后修改时间和人自动更新
## /*
## * @Date: 2019-06-21 17:01:50
## * @Author: zhuhu
## * @LastEditors: zhuhu
## * @LastEditTime: 2019-06-25 00:27:02
## * @Description: 登录UI组件
## */
##
##
## /**
## * @description: 描述
## * @param {type} 参数
## * @return: 返回值
## */