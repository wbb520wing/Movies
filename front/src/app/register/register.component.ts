import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendApiService } from '../services/backend-api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  myForm!: FormGroup;

  congratIcon = '&#127881;'

constructor(private formbulider: FormBuilder, private backendApiService: BackendApiService, private route: Router) {}


get password() {
  return this.myForm.get('password')
}
get username() {
  return this.myForm.get('username')
}

get email() {
  return this.myForm.get('email')
}


ngOnInit(): void {
  this.myForm = this.formbulider.group({
    password: ['', [Validators.required, Validators.minLength(6)]],
    username: ['', [Validators.required, Validators.maxLength(10)]],
    email: ['', [Validators.required, Validators.email]],
  })
}

onSubmit(f: FormGroup) {

      const email = f.value.email;
      const password = f.value.password;
      const username = f.value.username

      this.backendApiService.signUp(email,password,username).subscribe()
      this.myForm.reset();
}

switchToLogin(){
  this.route.navigate(['/login'])
}

}
