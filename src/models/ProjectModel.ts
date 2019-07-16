/*
 * @Date: 2019-06-21 16:35:29
 * @Author: zhuhu
 * @LastEditors: zhuhu
 * @LastEditTime: 2019-07-15 16:56:24
 * @Description: 项目模型  返回项目对象
 */
import { observable, action } from "mobx";
import { IProjectModel, IMemberItem } from 'project-module';

class ProjectModel implements IProjectModel {
    id:string;
    @observable name:string;
    @observable avatar:string;
    @observable description:string;
    @observable memberList:Array<IMemberItem>;

    constructor( id:string, name:string, avatar:string, description:string, memberList:Array<IMemberItem> ) {
        this.id = id;
        this.name = name;
    }
    
    /**
     * @description: 根据JSON对象更新项目信息
     * @param {json} :更新的数据 
     * @return: void
     */
    @action updateFromJS(json:IProjectModel) {
        this.name = json.name;
        this.avatar= json.avatar;
        this.description= json.description;
        this.memberList= json.memberList;
    }

    /**
     * @description: 静态方法创建项目
     * @param {object} :创建ProjectModel的数据
     * @return: ProjectModel
     */
    static fromJS(object:IProjectModel) {
        return new ProjectModel(
            object.id,
            object.name,
            object.avatar,
            object.description,
            object.memberList
        );
    }
}

export default ProjectModel;

