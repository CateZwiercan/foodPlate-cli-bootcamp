import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodGroupsComponent } from './food-groups.component';
import { FooterComponent } from '../footer/footer.component';
import { FoodDetailModule } from './food-detail/food-detail.module';



@NgModule({
  declarations: [FoodGroupsComponent],
  imports: [
    CommonModule, FoodDetailModule
  ], 
  exports: [FoodGroupsComponent]

})
export class FoodGroupsModule { }
