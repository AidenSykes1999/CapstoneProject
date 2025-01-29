import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  private apiUrl = ''; //TODO

  constructor(private http: HttpClient) {}

  getRestaurants(): Observable<any> {
    return this.http.get(`${this.apiUrl}/restaurants`);
  }

  getDishesByRestaurantId(restaurantId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/restaurants/${restaurantId}/dishes`);
  }

  getAllDishes(): Observable<any> {
    return this.http.get(`${this.apiUrl}/dishes`);
  }
}