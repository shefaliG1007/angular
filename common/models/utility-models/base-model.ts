
export class ResolverResponseModel {
    data: DataModel;
    meta: any;
    widget: WidgetModel;
}

export class RouteEnvelope {
    type: any;
    transferData: any;
}

export class DataModel {
    id: string | number = 0;
}

export class MetaModel {
    pageTitle: string;
    redirectPath: string;
    properties: any;
}

export class WidgetModel {}

export class CommonModel<T extends DataModel, M extends MetaModel> {}
