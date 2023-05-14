import { Component, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-error-message-show',
  templateUrl: './error-message-show.component.html',
  styleUrls: ['./error-message-show.component.css']
})
export class ErrorMessageShowComponent {
  @Input() title!:string
  @Input () name!:string
  @Input() model!: any
  constructor(private el: ElementRef) {}
}
