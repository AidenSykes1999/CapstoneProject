import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../service/restaurant.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {
  restaurants: any[] = [];
  isLoading = true;

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit(): void {
    this.restaurantService.getRestaurants().subscribe((data: any) => {
      this.restaurants = data;
      this.isLoading = false;
    });
  }
}