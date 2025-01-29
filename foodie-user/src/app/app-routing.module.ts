import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { DishListComponent } from './dish-list/dish-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/restaurants', pathMatch: 'full' }, // Default route
  { path: 'restaurants', component: RestaurantListComponent }, // View Restaurants
  { path: 'dishes', component: DishListComponent }, // View Dishes
  { path: 'restaurants/:id/dishes', component: DishListComponent }, // Dishes for a specific restaurant
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }