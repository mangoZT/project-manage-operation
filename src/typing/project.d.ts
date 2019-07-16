/*
 * @Date: 2019-07-15 14:56:41
 * @Author: zhuhu
 * @LastEditors: zhuhu
 * @LastEditTime: 2019-07-15 17:10:11
 * @Description: 项目模块的公共类型声明
 */

declare module "project-module" {

    interface IMemberItem {
        id:string;
        name:string;
        type:memberType
    }
    
    interface IProjectModel {
        id?:string;
        name:string;
        avatar:string;
        description:string;
        memberList:Array<IMemberItem>;
    }

    export enum memberType {
        leader=1,
        web=2,
        server=3,
        test=4,
        ued=5,
        product=6
    }
}
