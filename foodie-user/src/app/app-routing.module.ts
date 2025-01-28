import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { AddDishComponent } from './add-dish/add-dish.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'add-restaurant', component: AddRestaurantComponent, canActivate: [AuthGuard] },
  { path: 'add-dish', component: AddDishComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/add-restaurant', pathMatch: 'full' }, // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }