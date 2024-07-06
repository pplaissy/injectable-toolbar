import { Component, Input } from '@angular/core';
import { DocumentToolbarComponent } from '../document-toolbar/document-toolbar.component';
import { ChartsToolbarComponent } from '../charts-toolbar/charts-toolbar.component';
import { NestedToolbarTypeEnum } from '../model/nested-toolbar-type-enum';
import { ModelEventLifeCycle } from '../model/model-events-lifecycle';

@Component({
  selector: 'app-nested-toolbar',
  standalone: true,
  imports: [DocumentToolbarComponent, ChartsToolbarComponent],
  templateUrl: './nested-toolbar.component.html'
})
export class NestedToolbarComponent extends ModelEventLifeCycle {
  @Input() override model: any | undefined;
  NestedToolbarType = NestedToolbarTypeEnum;
}
