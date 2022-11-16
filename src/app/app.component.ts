import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Makanan', url: '/makananlist', icon: 'archive' },
    { title: 'Dashboard', url: '/dashboard', icon: 'person' }
  ];

  constructor() {}
}
