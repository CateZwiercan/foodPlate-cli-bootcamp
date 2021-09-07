import { Component, OnInit } from '@angular/core';
import { Food } from '../models/food';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'fp-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  isLoading: boolean;
  errorMessage: string;
  foodList: Food[];
  foodGroups: Set<string> = new Set();
  foodListByGroup: Food[];

  displayFoods(group): void {
    if (group === 'allFoods') {
      this.foodListByGroup = this.foodList;
    } else if(group !== 'allFoods') {
      this.foodListByGroup = this.foodList.filter((foods)=> {
        return foods.group === group;
    });
    }
  }   

  getFood(): void {
    this.foodService.getAllFoods<Food[]>()
      .subscribe(
        (food) => {
          this.foodList = food;
          this.getFoodGroups(this.foodList);
          this.displayFoods('allFoods');
        },
        (error) => {
          this.errorMessage = error.message;
          this.handleError(this.errorMessage);
        },
        () => this.isLoading = false
      )
  }

  getFoodGroups(food): void{
    food.forEach(food => {
      const group = food.group;
      this.foodGroups.add(group);
      });
    console.log(this.foodGroups);
  }

  handleError(err): void {
    console.log(err);
  }

  showNutrients(food): void{
    console.log(food.nutrients)
  }

  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    // console.log(this.foodService.getFoodsProgress());
    // this.foodService.loadFood().subscribe(data => console.log(data));
    this.getFood();
    this.displayFoods('allFoods');
  }

}
