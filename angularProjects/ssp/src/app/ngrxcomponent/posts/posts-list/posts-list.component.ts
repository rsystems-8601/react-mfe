import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../../state/poststate/posts.model';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { getPosts } from '../../state/poststate/posts.selectors';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss'],
})
export class PostsListComponent implements OnInit {
  posts: Observable<Post[]>;
  constructor(private store: Store<AppState>) {
    this.posts = this.store.select(getPosts);
  }

  ngOnInit(): void {
    
  }
}
