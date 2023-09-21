import { DataModel, MetaModel } from "common/models/utility-models/base-model";
import { DataService } from "../data-services/base-data-service";

export abstract class BaseWidgetService<T extends DataModel> {
    constructor(public baseDataService: DataService<T>) {}
    public abstract getMetaModel(): MetaModel;

    getDataModel() {
        return new Promise((resolve, reject) => {
            resolve(this.baseDataService.createInstance());
        });
    }

    async getBlankObject(): Promise<T> {
        return await new Promise<T>((resolve, reject) => {
            const instance = this.baseDataService.createInstance();
            resolve(instance);
        });
    }
    
    getListDataModel(queryParam, params = null): Promise<any> {
        return new Promise((resolve, reject) => {
            Promise.resolve()
                .then(() => {
                    return this.baseDataService.getData();
                })
                .then(listResponse => {
                    resolve(listResponse);
                })
                .catch(err => {
                    reject(err);
                });
        });
    }

}