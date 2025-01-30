import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html'
})
export class RestaurantListComponent implements OnInit {
  restaurants: any[] = [];

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit() {
    this.restaurantService.getRestaurants().subscribe((data: any) => {
      this.restaurants = data;
    });
  }
}