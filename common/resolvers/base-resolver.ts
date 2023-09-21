import { Resolve, Router } from '@angular/router';
import { DataModel, ResolverResponseModel, RouteEnvelope, WidgetModel } from 'common/models/utility-models/base-model';
import { OperationType } from 'common/constants/app-constants';
import { BaseWidgetService } from 'common/services/widget-services/base-widget-service';

export abstract class BaseResolver<T extends DataModel> implements Resolve<any> {
    constructor(public pageService: BaseWidgetService<T>, protected router: Router) {}

    resolve(): Promise<any> {
        let routeMessage;
        return new Promise((resolve, reject) => {
            Promise.resolve()
                .then(() => {
                    return Promise.resolve(this.getResolverMessage());
                })
                .then(message => {
                    routeMessage = message;
                    return this.getDataBaseOnMessage(message);
                })
                .then(res => {
                    const dataRes = res;
                    const meta = this.pageService.getMetaModel();
                    const widget = new WidgetModel();
                    return this.prepareResolveData(dataRes, meta, widget);
                })
                .then(finalRes => {
                    resolve(finalRes);
                })
                .catch(err => {
                    reject(err);
                });
        });
    }

    getResolverMessage() {
        const route = this.manageState();
        const routerConfig = new RouteEnvelope();
        routerConfig['type'] = route['type'];
        routerConfig['transferData'] = route['transferData'];
        return routerConfig;
    }

    manageState() {
        if (this.router.getCurrentNavigation().extras.state === undefined) {
            const envelope = new RouteEnvelope();
            envelope.type = OperationType.VIEW;
            envelope.transferData = null;
            return envelope;
        } else {
            return this.router.getCurrentNavigation().extras.state;
        }
    }

    getDataBaseOnMessage(message: RouteEnvelope): Promise<any> {
        return new Promise((resolve, reject) => {
            let promise;
            switch (message.type) {
                case OperationType.CREATE:
                    promise = Promise.resolve(this.pageService.getDataModel());
                    break;
                case OperationType.VIEW:
                    promise = this.pageService.getListDataModel(message.transferData);
                    break;
            }
            Promise.all([promise])
                .then(res => {
                    resolve(res[0]);
                })
                .catch(err => {
                    reject(err);
                });
        });
    }


    prepareResolveData(data: any, meta: any, widget: any): Promise<ResolverResponseModel> {
        return new Promise<ResolverResponseModel>((resolve, reject) => {
            const responseType = new ResolverResponseModel();
            const dataModel = this.modifyResponseData(data);
            responseType.data = dataModel;
            responseType.meta = meta;
            responseType.widget = widget;
            resolve(responseType);
        });
    }

    modifyResponseData(dataModel) {
        return dataModel;
    }
}
