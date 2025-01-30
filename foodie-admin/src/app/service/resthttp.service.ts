import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router'; // Import Router
import { Restaurant } from '../model/restaurant';

@Injectable({
  providedIn: 'root'
})
export class ResthttpService {
  url:string = "http://localhost:3000/restaurants";
  constructor(private http:HttpClient, private router: Router) { } // Add Router to constructor

  getRestaurants():Observable<any>{
    return this.http.get<any>(this.url);
  }
  getRestaurantById(restaurantid:number):Observable<Restaurant> 
  { 
    return this.http.get<Restaurant>(this.url+'/'+restaurantid); 
  }
  addRestaurant(restaurant:Restaurant):Observable<Restaurant> 
  { 
    restaurant['id'] = restaurant.restaurantid; 
    return this.http.post<Restaurant>(this.url, restaurant).pipe(
      tap(() => this.router.navigate(['/restaurants']))
    ); 
  }
  updateRestaurant(restaurant:Restaurant):Observable<Restaurant> 
  { 
    return this.http.put<Restaurant>(this.url+'/'+restaurant.restaurantid, restaurant); 
  } 
  deleteRestaurant(restaurantid:number){ 
    return this.http.delete(this.url+'/'+restaurantid); 
  } 
}