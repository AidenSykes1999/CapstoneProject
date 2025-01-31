import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserstorageService } from '../../service/storage/userstorage.service';

const BASIC_URL = "http://localhost:8080/";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  addRestaurant(restaurantDto:any): Observable<any>{
    return this.http.post(BASIC_URL + 'api/admin/restaurant', restaurantDto,  {
      headers: this.createAuthorisationHeader(),
  })
}

addDish(dishDto:any): Observable<any>{
  return this.http.post(BASIC_URL + 'api/admin/dish', dishDto,  {
    headers: this.createAuthorisationHeader(),
})
}

getAllRestaurants(): Observable<any>{
  return this.http.get(BASIC_URL + 'api/admin',   {
    headers: this.createAuthorisationHeader(),
})
}

getAllDishes(): Observable<any> {
  return this.http.get(BASIC_URL + 'api/admin/dishes', {
    headers: this.createAuthorisationHeader(),
  });
}

getAllDishesByName(name:any): Observable<any> {
  return this.http.get(BASIC_URL + `api/admin/search/${name}`, {
    headers: this.createAuthorisationHeader(),
  });
}

deleteDish(dishId: any): Observable<any> {
  return this.http.delete(BASIC_URL + `api/admin/dish/${dishId}`, {
    headers: this.createAuthorisationHeader(),
  });
}


  private createAuthorisationHeader(): HttpHeaders{
    return new HttpHeaders().set(
      'Authorisation', 'Bearer ' + UserstorageService.getToken()
    )
  }

}
