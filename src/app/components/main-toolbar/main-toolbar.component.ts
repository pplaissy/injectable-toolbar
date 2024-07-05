import { Component, Input } from '@angular/core';
import { MainToolbarVM } from './main-toolbar-vm';

@Component({
  selector: 'app-main-toolbar',
  standalone: true,
  imports: [],
  templateUrl: './main-toolbar.component.html'
})
export class MainToolbarComponent {
  @Input() model: MainToolbarVM | undefined;
}
