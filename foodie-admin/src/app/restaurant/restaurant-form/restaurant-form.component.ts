import { Component } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-form',
  templateUrl: './restaurant-form.component.html'
})
export class RestaurantFormComponent {
  restaurant = { name: '', location: '' };

  constructor(private restaurantService: RestaurantService, private router: Router) {}

  save() {
    this.restaurantService.addRestaurant(this.restaurant).subscribe(() => {
      this.router.navigate(['/restaurants']);
    });
  }
}