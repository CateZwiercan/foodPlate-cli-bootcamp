import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserStatusService {

  registered: boolean;
  user: User

  getRegisteredStatus(currentUser) {
    if(currentUser.registered === true) {
      console.log(`User registered is: ${currentUser.registered}`);
    }
  }
  getUserStatus(currentUser){
    console.table(currentUser)
  }

  constructor() { }
}
