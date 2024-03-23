import { createReducer, on } from "@ngrx/store";
import { initialState } from "./posts.state";
import { customIncrement, decrement, increment, reset } from "./posts.actions";

const _postReducer = createReducer(initialState);
export function postReducer(state, action){
    return _postReducer(state, action);
}