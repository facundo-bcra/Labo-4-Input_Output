import { Component } from '@angular/core';
import { LikeButtonComponent } from "../like-button/like-button.component";

@Component({
  selector: 'app-post',
  imports: [LikeButtonComponent],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  likeCount: number = 0;
  onLike(megusta: number) {
    this.likeCount++;
    this.likeCount += megusta;
  }
}
