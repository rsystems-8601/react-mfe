import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  @Output() childEvent = new EventEmitter<string>();
  public rot = 8888;

  emitMessage() {
    this.childEvent.next('Hello from child!');
  }

}
