import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host:{
    class: 'control'
  }// we could have added the class in html file but this way we can ensure that the class is always added to the host element or to the file where we use the component
})
export class ControlComponent {
  label = input.required<string>();
}
