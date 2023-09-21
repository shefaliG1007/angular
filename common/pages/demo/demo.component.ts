import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DemoMetaModel, DemoModel } from 'common/models/page-models/demo.model';
import { DemoWidgetService } from 'common/services/widget-services/demo-widget-service';
import { BaseComponent } from 'common/widgets/core/base-component';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent extends BaseComponent<DemoModel, DemoMetaModel> {

  constructor(protected override ws: DemoWidgetService, protected aRoute: ActivatedRoute){
    super(ws, aRoute)
  }

}
