import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Restaurant } from '../model/restaurant';
import { ResthttpService } from '../service/resthttp.service';

@Component({
  selector: 'app-restaurantform',
  standalone: false,
  
  templateUrl: './restaurantform.component.html',
  styleUrl: './restaurantform.component.css'
})
export class RestaurantformComponent {
  rest: Restaurant;

  constructor(public restService: ResthttpService) {
    this.rest = {
      restaurantid: 1,
      name: '',
      location: ''
    };
  }

  @Output()
  empadded: EventEmitter<Restaurant> = new EventEmitter();

  saveRestaurant() {
    console.log(this.rest);

    this.restService.addRestaurant(this.rest).subscribe(response => console.log(response));
  }
}