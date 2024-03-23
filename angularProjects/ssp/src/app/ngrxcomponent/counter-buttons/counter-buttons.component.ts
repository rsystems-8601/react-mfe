import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment } from '../state/counter.actions';
import { CounterState } from '../state/counter.state';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.scss']
})
export class CounterButtonsComponent implements OnInit {

  constructor(private store : Store<AppState>){

  }
  ngOnInit(): void {
    
  }

  callIncrrement (){
    this.store.dispatch(increment());
  }

}
