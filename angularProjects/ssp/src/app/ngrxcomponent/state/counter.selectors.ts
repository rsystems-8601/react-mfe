import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterState } from "./counter.state";

const getCounterState = createFeatureSelector<CounterState>('rootcounter');

export const getCounter = createSelector(getCounterState, (state)=>{
    return state.counter
});