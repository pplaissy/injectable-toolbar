import { Component, Input } from '@angular/core';
import { MainToolbarVM } from './main-toolbar-vm';
import { ToolbarModule } from 'primeng/toolbar';
import { MenubarModule } from 'primeng/menubar';
import { NestedToolbarComponent } from '../nested-toolbar/nested-toolbar.component';

@Component({
  selector: 'app-main-toolbar',
  standalone: true,
  imports: [ToolbarModule, MenubarModule, NestedToolbarComponent],
  templateUrl: './main-toolbar.component.html'
})
export class MainToolbarComponent {
  @Input() model: MainToolbarVM;

  constructor() {
    this.model = new MainToolbarVM();
  }
}
