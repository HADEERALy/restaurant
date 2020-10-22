import { Component } from '@angular/core';

/**
 * Generated class for the BoardingComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'boarding',
  templateUrl: 'boarding.html'
})
export class BoardingComponent {

  text: string;

  constructor() {
    console.log('Hello BoardingComponent Component');
    this.text = 'Hello World';
  }

}
