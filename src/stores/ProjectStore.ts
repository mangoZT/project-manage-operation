/*
 * @Date: 2019-07-12 19:58:16
 * @Author: zhuhu
 * @LastEditors: zhuhu
 * @LastEditTime: 2019-07-16 11:32:37
 * @Description: 项目管理store
 */
import { observable, action } from "mobx";

import { IProjectModel } from "project-module";

class ProjectStore {
    private api:any;
    private appStore:any;
    @observable projects:Array<IProjectModel>;

    constructor(api:any, appStore:any) {
        this.api = api;
        this.appStore = appStore;
    }


    /**
     * @description: 根据帖子id，获取当前store中的帖子
     * @param {id} :帖子ID
     * @return: 
     */    
    getPost(id:string) {
        return this.projects.find(item => item.id === id);
    }


    /**
     * @description: 获取项目列表
     * @param {id} 用户id 
     * @return: projects
     */
    @action getProjectList(id:string) {
               
    }

    /**
     * @description: 新增或者编辑项目,然后更新数据
     * @param {project} 项目对象
     * @return: void
     */
    @action addProject(project:IProjectModel) {

    }
}

export default ProjectStore;