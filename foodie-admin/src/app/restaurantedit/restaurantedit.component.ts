import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../model/restaurant';
import { ResthttpService } from '../service/resthttp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editrestaurant',
  standalone: false,
  
  templateUrl: './editrestaurant.component.html',
  styleUrl: './editrestaurant.component.css'
})
export class EditrestaurantComponent implements OnInit {
  ngOnInit(): void {
    
  }

  rest:Restaurant;

  constructor(private router:Router, private restservice:ResthttpService){
    this.rest = history.state;
  }

  editRestaurant(){
    this.restservice.updateRestaurant(this.rest).subscribe(resp=> {
      console.log(resp);
      this.router.navigate([''])
    });
  }

}