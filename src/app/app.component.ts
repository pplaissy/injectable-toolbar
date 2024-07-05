import { Component, Input } from '@angular/core';
import { ModelEventLifeCycle } from './components/model-events-lifecycle';
import { AppVM } from './app-vm';
import { MainToolbarComponent } from './components/main-toolbar/main-toolbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MainToolbarComponent],
  templateUrl: './app.component.html'
})
export class AppComponent extends ModelEventLifeCycle {
  @Input() override model: AppVM;

  constructor() {
    super();
    this.model = new AppVM();
  }
}
