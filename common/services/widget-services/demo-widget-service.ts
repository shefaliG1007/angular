import { Injectable } from "@angular/core";
import { DemoMetaModel, DemoModel } from "common/models/page-models/demo.model";
import { MetaModel } from "common/models/utility-models/base-model";
import { DemoDataService } from "../data-services/demo-data-service";
import { BaseWidgetService } from "./base-widget-service";

@Injectable({
    providedIn: 'root'
})
export class DemoWidgetService extends BaseWidgetService<DemoModel> {
    constructor(protected ds: DemoDataService) {
        super(ds);
    }

    getMetaModel(): MetaModel {
        const meta = new DemoMetaModel();
        return meta;
    }
}
