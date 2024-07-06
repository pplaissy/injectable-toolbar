import { Component, Input } from '@angular/core';
import { ModelEventLifeCycle } from '../model/model-events-lifecycle';
import { ChartsToolbarVM } from './charts-toolbar-vm';
import { FormsModule } from '@angular/forms';
import { SelectButtonModule } from 'primeng/selectbutton';

@Component({
  selector: 'app-charts-toolbar',
  standalone: true,
  imports: [FormsModule, SelectButtonModule],
  templateUrl: './charts-toolbar.component.html'
})
export class ChartsToolbarComponent extends ModelEventLifeCycle {
  @Input() override model: ChartsToolbarVM | undefined;
}
