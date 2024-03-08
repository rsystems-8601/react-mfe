import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgOptimizedImage, NgStyle } from '@angular/common';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [NgOptimizedImage, NgStyle],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() occupation = '';
  @Output() incrementCountEvent = new EventEmitter<number>();
  count: any= 1;

  onClick() {
    this.count++;
    this.incrementCountEvent.emit(this.count);
}
}
