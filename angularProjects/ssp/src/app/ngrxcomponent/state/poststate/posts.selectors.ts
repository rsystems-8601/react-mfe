import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostState } from "./posts.state";

const getPostsState = createFeatureSelector<PostState>('rootposts');

export const getPosts = createSelector(getPostsState, (state)=>{
    return state.posts
});