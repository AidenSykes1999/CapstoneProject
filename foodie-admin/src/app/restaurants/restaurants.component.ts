import { Component, Input, SimpleChanges } from '@angular/core';
import { restaurants } from '../model/data';
import { ResthttpService } from '../service/resthttp.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurant } from '../model/restaurant';

@Component({
  selector: 'app-restaurants',
  standalone: false,
  
  templateUrl: './restaurants.component.html',
  styleUrl: './restaurants.component.css'
})
export class RestaurantsComponent {
  restaurants = restaurants;

  constructor(public restservice: ResthttpService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.restservice.getRestaurants()
    .subscribe((resp) => {
      console.log('fetched restaurants')
      console.log(resp);
      this.restaurants = resp;
    })
  }

  @Input()
  newrest:any = {};

  ngOnChanges(changes: SimpleChanges): void{
    console.log(this.newrest);
    if(this.newrest !== undefined){
      this.restaurants.unshift(this.newrest);
    }
  }

  delete(rest: Restaurant){
    this.restservice.deleteRestaurant(rest.restaurantid).subscribe(res => console.log(res));
  }

  edit(rest: Restaurant){
    this.router.navigateByUrl('/edit',{state:rest});
  }
}