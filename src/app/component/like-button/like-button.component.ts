import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-like-button',
  imports: [],
  templateUrl: './like-button.component.html',
  styleUrl: './like-button.component.css'
})
export class LikeButtonComponent {
  @Input() likes: number = 0;
  @Output() liked = new EventEmitter<number>();

  like() {
    this.liked.emit(10)
  }
}
