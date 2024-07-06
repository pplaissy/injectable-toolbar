import { Component, Input } from '@angular/core';
import { HomeVM } from './home-vm';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  @Input() model: HomeVM;

  constructor() {
    this.model = new HomeVM();
  }
}
