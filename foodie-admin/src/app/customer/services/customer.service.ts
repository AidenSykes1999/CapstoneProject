import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserstorageService } from '../../service/storage/userstorage.service';

const BASIC_URL = "http://localhost:8080/"

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  getAllDishes(): Observable<any> {
    return this.http.get(BASIC_URL + 'api/customer/dishes', {
      headers: this.createAuthorisationHeader(),
    });
  }
  
  getAllDishesByName(name:any): Observable<any> {
    return this.http.get(BASIC_URL + `api/customer/search/${name}`, {
      headers: this.createAuthorisationHeader(),
    });
  }

  getAllRestaurants(): Observable<any>{
    return this.http.get(BASIC_URL + 'api/customer',   {
      headers: this.createAuthorisationHeader(),
  })
  }
  

  private createAuthorisationHeader(): HttpHeaders{
    return new HttpHeaders().set(
      'Authorisation', 'Bearer ' + UserstorageService.getToken()
    )
  }


}
