import { DataModel } from 'common/models/utility-models/base-model';
import { HttpService } from '../core-services/http-service';
import { API_URL, OperationType, PAGE_CONFIG } from 'common/constants/app-constants';
import { environment } from 'src/environments/environment';

export abstract class DataService<T extends DataModel> {
    constructor(
        protected ApiUrl: API_URL,
        protected apiService: HttpService
    ) {}
    abstract createInstance(): T;

    getAPI_URL(): API_URL {
        return this.ApiUrl;
    }

    generateUrl(type: OperationType, paramKey = null, extraKey = null) {
        let url;
        switch (type) {
            case OperationType.CREATE:
                url = environment.apiUrl + this.ApiUrl + '/' + PAGE_CONFIG.CREATE;
                break;
            case OperationType.VIEW:
                url = environment.apiUrl + this.ApiUrl;
                break;
            default:
                url = environment.apiUrl + this.ApiUrl;
                break;
        }
        return url;
    }

    async getData(): Promise<T[]> {
        return await new Promise<T[]>((resolve, reject) => {
            const url = this.generateUrl(OperationType.VIEW);
            this.apiService
                .get(url)
                .then(res => {
                    resolve(res);
                })
                .catch(err => {
                    reject(err);
                });
        });
    }
}