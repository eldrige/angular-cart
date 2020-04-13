import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: 
  `
    <div><h1>{{title}}</h1></div>
    <pm-products></pm-products>
  `
 
})
export class AppComponent {
  title = 'Acme Product Management';
}
