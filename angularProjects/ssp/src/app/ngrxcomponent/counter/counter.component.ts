import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CounterState } from '../state/counter.state';
import { getCounter } from '../state/counter.selectors';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  counter: number;
  counter$: Observable<{counter: number}>;
  counterbyfeature: number;
  counterbyfeatureObserv$: Observable<number>;

  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
    this.store.select('rootcounter').subscribe((data) => {
      this.counter = data.counter;
    });
    this.store.select(getCounter).subscribe((counter) => {
      this.counterbyfeature = counter;
    });
    this.counterbyfeatureObserv$ = this.store.select(getCounter);
    this.counter$ = this.store.select("rootcounter")
  }
}
