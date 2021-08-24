import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UserService } from './services/user.service';
import { User } from './models/User';

@Component({
  selector: 'fp-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  user: User;

  constructor(private titleService: Title, private userService: UserService) {}

  ngOnInit (){
    this.titleService.setTitle('Welcome to FoodPlate');
    this.user = this.userService.getUser();
  }
}
