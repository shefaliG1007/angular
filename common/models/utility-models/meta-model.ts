import { MetaModel } from 'common/models/utility-models/base-model';

export abstract class UIMetaModel extends MetaModel {
    override properties: any;
    constructor(title: string, redirectPath: string) {
        super();
        this.pageTitle = title;
        this.redirectPath = redirectPath;
    }

    abstract getMetaModel(): MetaModel;
    abstract initProperties(): any;
}

export abstract class GridMetaModel<T> extends UIMetaModel {
    constructor(
        name: string,
        pagePath: string,
        redirectPath: string,
        protected isEditable: boolean,
        protected isDeletable: boolean,
        protected recordPerPage: number,
        protected hasRedirection: boolean = false,
        protected isAdd: boolean = true,
        protected searchableFields: string[] = [],
        protected isExtraActions: boolean = true,
        protected isDateFilter: boolean = false,
        protected EditCondition: any = null,
        protected isStatusFilter: boolean = false,
        public redirectTo: string = null,
        protected isCreateAlternate: boolean = false,
    ) {
        super(name, pagePath);
    }

    abstract prepareHeaderList(): T[];

    getMetaModel(): MetaModel {
        const pageData = new MetaModel();
        pageData.pageTitle = this.pageTitle;
        pageData.properties = this.initProperties();
        pageData.redirectPath = this.redirectPath;
        return pageData;
    }

    initProperties(): any {
        const dataInfo = {
            isEditable: this.isEditable,
            isDeletable: this.isDeletable,
            recordPerPage: this.recordPerPage,
            hasRedirection: this.hasRedirection,
            isAdd: this.isAdd,
            searchableFields: this.searchableFields,
            isExtraActions: this.isExtraActions,
            isDateFilter: this.isDateFilter,
            EditCondition: this.EditCondition,
            isStatusFilter: this.isStatusFilter,
            redirectTo: this.redirectTo,
            gridInfo: this.prepareHeaderList()
        };
        return dataInfo;
    }
}

export abstract class FormMetaModel extends UIMetaModel {
    constructor(
        protected pageName: string,
        public override redirectPath: string,
        public redirectionUrl: string,
        protected numberOfRows: number
    ) {
        super(pageName, redirectPath);
    }

    getMetaModel(): MetaModel {
        const pageInfo = new MetaModel();
        pageInfo.pageTitle = this.pageTitle;
        pageInfo.properties = this.initProperties();
        pageInfo.redirectPath = this.redirectPath;
        return pageInfo;
    }

    initProperties() {
        const formInfo = {
            isFormControl: false,
            numberOfRows: this.numberOfRows
        };
        return formInfo;
    }
}

export class Headers {
    constructor(
        public readonly displayName: string,
        public readonly keyName: string,
        public readonly isSerchable: boolean,
        public readonly isSortable: boolean,
        public readonly feildType: string,
    ) {}
}

