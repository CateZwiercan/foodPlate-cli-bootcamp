import { Component, OnInit } from '@angular/core';
import { TodaysGoalService } from '../services/todays-goal.service';

@Component({
  selector: 'fp-todays-goal',
  templateUrl: './todays-goal.component.html',
  styleUrls: ['./todays-goal.component.css']
})
export class TodaysGoalComponent implements OnInit {

  goals: Array<String> = [
    'Eat more fruit',
    'Master rxjs', 
    'Do 500 push ups',
    'Eat more veggies',
    'eat 1 bag of chips'
  ]

  sendGoal(goal): void {
    this.todaysGoalService.sendGoal(goal);
  }

  clearGoal() {
    this.todaysGoalService.clearGoal();
  }

  constructor(private todaysGoalService: TodaysGoalService) { }

  ngOnInit(): void {
  }

}
