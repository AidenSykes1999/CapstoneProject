import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  private baseUrl = 'http://localhost:8080/api/restaurants';

  constructor(private http: HttpClient) {}

  getRestaurants() {
    return this.http.get(`${this.baseUrl}`);
  }

  addRestaurant(restaurant: any) {
    return this.http.post(`${this.baseUrl}`, restaurant);
  }
}