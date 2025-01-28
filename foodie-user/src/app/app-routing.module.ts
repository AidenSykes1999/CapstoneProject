import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { DishListComponent } from './dish-list/dish-list.component';

const routes: Routes = [
  { path: '', component: RestaurantListComponent }, // Default route
  { path: 'restaurants/:id/dishes', component: DishListComponent }, // Route for dishes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }