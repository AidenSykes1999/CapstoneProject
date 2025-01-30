import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { AddDishComponent } from './add-dish/add-dish.component';
import { ViewRestaurantComponent } from './view-restaurant/view-restaurant.component';
import { ViewDishComponent } from './view-dish/view-dish.component';
import { AuthGuard } from './service/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'add-restaurant', component: AddRestaurantComponent, canActivate: [AuthGuard] },
  { path: 'add-dish', component: AddDishComponent, canActivate: [AuthGuard] },
  { path: 'view-restaurant', component: ViewRestaurantComponent, canActivate: [AuthGuard] },
  { path: 'view-dish', component: ViewDishComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/login' } // Redirect to login for any unknown route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }