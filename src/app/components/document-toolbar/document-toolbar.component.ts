import { Component, Input } from '@angular/core';
import { ModelEventLifeCycle } from '../model/model-events-lifecycle';
import { DocumentToolbarVM } from './document-toolbar-vm';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-document-toolbar',
  standalone: true,
  imports: [FormsModule, SelectButtonModule],
  templateUrl: './document-toolbar.component.html'
})
export class DocumentToolbarComponent extends ModelEventLifeCycle {
  @Input() override model: DocumentToolbarVM | undefined;
}