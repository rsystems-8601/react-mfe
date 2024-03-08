import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrl: './second.component.css',
})
export class SecondComponent implements OnInit {
  isSubmitted: boolean = false;
  myForm: FormGroup | any;
  celcius: number;
  foreignhight: number;
  userList = [
    { id: 1, name: 'rahul', city: 'agra' },
    { id: 2, name: 'rohit', city: 'delhi' },
  ];

  constructor() {
    this.celcius = 0;
    this.foreignhight = 0;
  }

  ngOnInit() {
    this.myForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      secondName: new FormControl(''),
    });
  }

  onSubmit() {
    this.isSubmitted = this.myForm.invalid;
    if (this.myForm.valid) {
      console.log(this.myForm.value);
      const data = {
        firstName: this.myForm.value.firstName,
        secondName: this.myForm.value.secondName,
      };
      console.log(data);
    }
  }

  convertempurature() {
    this.foreignhight = this.celcius * 2;
  }
}
