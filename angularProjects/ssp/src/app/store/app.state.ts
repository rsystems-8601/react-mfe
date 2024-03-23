import { counterReducer } from '../ngrxcomponent/state/counter.reducer';
import { CounterState } from '../ngrxcomponent/state/counter.state';
import { postReducer } from '../ngrxcomponent/state/poststate/posts.reducer';
import { PostState } from '../ngrxcomponent/state/poststate/posts.state';

export interface AppState {
  rootcounter: CounterState;
  rootposts: PostState;
}

export const appReducer = {
  rootcounter: counterReducer,
  rootposts: postReducer,
};
