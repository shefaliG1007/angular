import { Directive } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DataModel, MetaModel } from "common/models/utility-models/base-model";
import { BaseWidgetService } from "common/services/widget-services/base-widget-service";

@Directive()
export abstract class BaseComponent<T extends DataModel, M extends MetaModel> {
    pageMeta: M;
    pageData: any;
    widget: any;

    constructor(protected ws: BaseWidgetService<T>, protected activatedRoute: ActivatedRoute) {}

    ngOnInit(): void {
        console.log(this.activatedRoute.snapshot.data);
        this.pageData = this.activatedRoute.snapshot.data[0].data;
        this.pageMeta = this.activatedRoute.snapshot.data[0].meta;
        this.widget = this.activatedRoute.snapshot.data[0].widget;
        console.log(this.pageData);
    }
}
