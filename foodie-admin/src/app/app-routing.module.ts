import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { AddDishComponent } from './add-dish/add-dish.component';

const routes: Routes = [
  { path: 'add-restaurant', component: AddRestaurantComponent },
  { path: 'add-dish', component: AddDishComponent },
  { path: '', redirectTo: '/add-restaurant', pathMatch: 'full' }, // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }