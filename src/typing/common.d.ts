
/*
 * @Date: 2019-07-15 16:59:00
 * @Author: zhuhu
 * @LastEditors: zhuhu
 * @LastEditTime: 2019-07-15 17:14:57
 * @Description: 所有公共类型声明
 */

declare module "common-module" {
    export interface IAppStore {
        requestQuantity:number;
        error:string;
        projectName:string;
        isLoading:boolean;
        increaseRequest():void;
        decreaseRequest():void;
    }

    export interface IApis {
        [propName: string]:any;
    }
}
