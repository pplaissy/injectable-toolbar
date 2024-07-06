import { Component, Input } from '@angular/core';
import { AppVM } from './app-vm';
import { MainToolbarComponent } from './components/main-toolbar/main-toolbar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, MainToolbarComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  @Input() model: AppVM;

  constructor() {
    this.model = new AppVM();
  }
}
