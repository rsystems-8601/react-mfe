import { Component } from '@angular/core';
import { AuthserviceService } from '../services/authservice.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { customIncrement } from '../ngrxcomponent/state/counter.actions';
import { CounterState } from '../ngrxcomponent/state/counter.state';
import { AppState } from '../store/app.state';

@Component({
  selector: 'app-logintemplate',
  templateUrl: './logintemplate.component.html',
  styleUrls: ['./logintemplate.component.scss'],
})
export class LogintemplateComponent {
  isShowErrors: boolean;
  username: string;
  password: string | number;
  age: number;

  constructor(public authService: AuthserviceService,
    private router: Router,
    private store: Store<AppState>
    ) {}

  onSubmit(formData, formObj) {
    if (formObj.form.invalid) {
      this.isShowErrors = true;
      return false;
    }
    const data = { username: formData.username, password: formData.password };
    this.authService.checkLogin(data).subscribe(
      (result) => {
        console.log(result);
      },
      (error) => {
        alert(error);
        this.router.navigateByUrl("/");
      }

      // {
      //   next: (res) => {
      //     console.log('queryParams', res);
      //   },
      //   error: (err: any) => { this.router.navigateByUrl("/") },
      //   complete: () => { }
      // }
    );
    return true;
  }

  addIncrement(){
    this.store.dispatch(customIncrement({value: +this.age}));
  }
}
