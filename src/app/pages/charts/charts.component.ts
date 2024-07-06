import { Component, Input } from '@angular/core';
import { ModelEventLifeCycle } from '../../components/model/model-events-lifecycle';
import { ChartsVM } from './charts-vm';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './charts.component.html'
})
export class ChartsComponent extends ModelEventLifeCycle {
  @Input() override model: ChartsVM | undefined;

  constructor() {
    super();
    this.model = new ChartsVM();
  }
}
