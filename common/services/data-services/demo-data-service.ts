import { DemoModel } from "common/models/page-models/demo.model";
import { DataService } from "./base-data-service";
import { HttpService } from "../core-services/http-service";
import { Injectable } from "@angular/core";
import { API_URL } from "common/constants/app-constants";

@Injectable({
    providedIn: 'root'
})
export class DemoDataService extends DataService<DemoModel> {
    constructor(http: HttpService) {
        super(API_URL.jboss, http);
    }

    createInstance(): DemoModel {
        return new DemoModel();
    }
}
