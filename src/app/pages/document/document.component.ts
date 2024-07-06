import { Component, Input } from '@angular/core';
import { ModelEventLifeCycle } from '../../components/model/model-events-lifecycle';
import { DocumentVM } from './document-vm';

@Component({
  selector: 'app-document',
  standalone: true,
  imports: [],
  templateUrl: './document.component.html'
})
export class DocumentComponent extends ModelEventLifeCycle {
  @Input() override model: DocumentVM | undefined;

  constructor() {
    super();
    this.model = new DocumentVM();
  }
}
