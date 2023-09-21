import { Injectable } from "@angular/core";
import { BaseResolver } from "../base-resolver";
import { DemoModel } from "common/models/page-models/demo.model";
import { DemoWidgetService } from "common/services/widget-services/demo-widget-service";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class DemoResolver extends BaseResolver<DemoModel> {
    constructor(
        protected fs: DemoWidgetService,
        protected override router: Router,
    ) {
        super(fs, router);
    }
}