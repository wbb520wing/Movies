import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { BackendApiService } from '../services/backend-api.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  myLoginForm!: FormGroup;

 

  get email() {
    return this.myLoginForm.get('email');
  }

  get password() {
    return this.myLoginForm.get('password');
  }

  get username() {
    return this.myLoginForm.get('username');
  }

  constructor(private fb: FormBuilder, private _auth: BackendApiService ) {}

  ngOnInit(): void {
    this.myLoginForm = this.fb.group({
      password: ['' ],
      email: [''],
      username: ['']
    });
  }

  loginInfo(f : FormGroup){
    this._auth.logIn( f.value.email, f.value.password )
    .subscribe(
      res =>{
        console.log('User successfully logged in!')
        console.log(res)},
      err => console.log(err)
    )


    console.log(f.value);
  }


}
