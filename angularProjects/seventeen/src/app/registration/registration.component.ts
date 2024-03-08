import { Component } from '@angular/core';
import {ReactiveFormsModule, FormControl, FormGroup, FormsModule } from '@angular/forms';
@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  favoriteFramework: any;
  profileForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
  });
}
