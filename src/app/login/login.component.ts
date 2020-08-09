import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'ngx-custom-validators';
import { UniqnessValidator } from './../validations/uniqness.customvald';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
 /* submit(f){
   console.log(f);
  }*/
  form = new FormGroup({
    email: new FormControl('', [Validators.required] , UniqnessValidator.CheckUniqness),
    password: new FormControl()
  });
  login(){

    return this.form.setErrors({invalidlogin: true});
  }

  get email()
  {
    return this.form.get('email');
  }

  ngOnInit(): void {
  }

}
