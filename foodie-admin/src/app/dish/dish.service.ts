import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DishService {
  private baseUrl = 'http://localhost:8080/api/dishes';

  constructor(private http: HttpClient) {}

  getDishes() {
    return this.http.get(`${this.baseUrl}`);
  }

  addDish(dish: any) {
    return this.http.post(`${this.baseUrl}`, dish);
  }

  deleteDish(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}