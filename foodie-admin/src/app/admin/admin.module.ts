import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularMaterialModule } from '../AngularMaterialModule';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PostrestaurantComponent } from './components/postrestaurant/postrestaurant.component';
import { PostDishComponent } from './components/post-dish/post-dish.component';


@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    PostrestaurantComponent,
    PostDishComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularMaterialModule
  ]
})
export class AdminModule { }
