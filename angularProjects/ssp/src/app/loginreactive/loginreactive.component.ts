import { ViewChild, Component,  OnInit, } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../services/register.service';
import { AuthserviceService } from '../services/authservice.service';
import { Router } from '@angular/router';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-loginreactive',
  templateUrl: './loginreactive.component.html',
  styleUrls: ['./loginreactive.component.scss'],
})
export class LoginreactiveComponent implements OnInit {
  isSubmitted: boolean = false;
  myForm: FormGroup;
  @ViewChild(ChildComponent)  private childComponentToolar: ChildComponent;
  constructor(
    protected pd: RegisterService,
    protected authService: AuthserviceService,
    private router: Router
  ) {
    
  }

  ngOnInit() {
    const aa: any = this.pd;
    console.log(aa.key);
    console.log(aa.key2());
    this.myForm = new FormGroup<{
      username: FormControl<string>; // Required field
      password: FormControl<string>; // Required field
      email?: FormControl<string>; // Optional field
    }>({
      username: new FormControl('', Validators.required),
      password: new FormControl(''),
      email: new FormControl(''),
    });
  }

  onSubmit() {
   alert(this.childComponentToolar?.rot)
    this.isSubmitted = this.myForm.invalid;
    if (this.myForm.valid) {
      console.log(this.myForm.value);
      const data = {
        username: this.myForm.value.username,
        password: this.myForm.value.password,
      };
      this.authService.checkLogin(data).subscribe(
        (result) => {
          console.log(result);
        },
        (error) => {
          alert(error);
          this.router.navigateByUrl('/');
        }
      );
    }
  }
  rahana(val){
    alert(val)
  }
}
