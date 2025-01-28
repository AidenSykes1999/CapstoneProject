import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  private apiUrl = ''; // TODO REPLACE WITH BACKEND API

  constructor(private http: HttpClient) {}

  // Fetch all restaurants
  getRestaurants(): Observable<any> {
    return this.http.get(`${this.apiUrl}/restaurants`);
  }

  // Fetch dishes for a specific restaurant
  getDishesByRestaurantId(restaurantId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/restaurants/${restaurantId}/dishes`);
  }
}