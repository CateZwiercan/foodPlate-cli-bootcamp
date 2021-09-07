import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UserService } from './services/user.service';
import { User } from './models/User';
import { RequirementsService } from './services/requirements.service';
import { Requirment } from './models/requirment';

@Component({
  selector: 'fp-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  //user: User;
  currentUser: User;

  private requirments: Array<Requirment>;

  constructor(private titleService: Title, private userService: UserService, private reqsService: RequirementsService) {}

  ngOnInit (){
    this.titleService.setTitle('Welcome to FoodPlate');
    // this.user = this.userService.getUser();
    this.userService.getUser();
    this.userService.currentUser.subscribe(user => this.currentUser = user);
    // console.log(this.reqsService.getRequirments());
    this.reqsService.getRequirments().subscribe(
      reqs => {
        this.requirments = reqs;
        console.table(this.requirments);
        console.log(this.requirments[1].ageGroup);
      }
    );
  }
}
