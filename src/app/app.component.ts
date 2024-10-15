import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-site-header></app-site-header>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}
