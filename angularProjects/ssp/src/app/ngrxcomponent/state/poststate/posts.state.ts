// export interface Post{
//   id:string;
//   title:string;
//   description:string
// }
import { Post } from "./posts.model";
export interface PostState{
  posts: Post[];
}

export const initialState: PostState  = {
  posts: [
    {id:'1', title:"Sample Title 1", description: "Select Description"},
    {id:'1', title:"Sample Title 1", description: "Select Description"},
  ]
}