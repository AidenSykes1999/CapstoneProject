import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RestaurantListComponent } from './restaurant/restaurant-list/restaurant-list.component';
import { RestaurantFormComponent } from './restaurant/restaurant-form/restaurant-form.component';
import { DishListComponent } from './dish/dish-list/dish-list.component';
import { DishFormComponent } from './dish/dish-form/dish-form.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'restaurants', component: RestaurantListComponent, canActivate: [AuthGuard] },
  { path: 'restaurants/add', component: RestaurantFormComponent, canActivate: [AuthGuard] },
  { path: 'dishes', component: DishListComponent, canActivate: [AuthGuard] },
  { path: 'dishes/add', component: DishFormComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }