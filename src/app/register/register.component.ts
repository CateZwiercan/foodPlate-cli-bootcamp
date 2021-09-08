import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'fp-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  currentUser: User;
  ageGroups = [
    'select your age group',
    '2-3', '4-8', '9-13', '14-18', '19-30', '31-50', '51+'
  ];

  regForm: FormGroup;
  submit: boolean;
  router: Router;

  canDeactivate(): boolean {
    console.log(!this.regForm.touched);
    return !this.regForm.touched || this.submit;
  }

  constructor(private userService: UserService) {
                this.regForm = new FormGroup({
                  firstname : new FormControl(null, [Validators.required, Validators.email]),
                  email : new FormControl(null, [Validators.required]),
                  gender : new FormControl(null, [Validators.required]),
                  ageGroup : new FormControl(null, [Validators.required]),
                })
              }

  onSubmit(formValues) {
    this.submit = true;
    this.userService.updateUser(formValues);
    UserService.storeUserLocal(formValues);
    this.router.navigate(['myPlate']);
  }

  ngOnInit(): void {
    this.userService.currentUser.subscribe(user => this.currentUser = user);
    this.regForm.valueChanges.subscribe(value => console.log(value))
  }

}
