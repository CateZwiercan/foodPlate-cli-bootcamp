import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TodaysGoalService } from '../services/todays-goal.service';

@Component({
  selector: 'fp-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  versionString: string = '1.0.0';
  icon: string = 'assets/images/icons/icons-29.png';
  logoAlt: string = "FoodPlate Logo";
  isCurrent: boolean = false;
  subscription: Subscription;
  goal: any;

  moreInfo() {
    alert('For more info see, choosemyplate.gov');
  }

  constructor(private todaysGoalService: TodaysGoalService) { 
    this.subscription = this.todaysGoalService.getGoal().subscribe(goal => {
      this.goal = goal;
    })
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
