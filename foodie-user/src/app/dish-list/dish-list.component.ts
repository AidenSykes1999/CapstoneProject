import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../service/restaurant.service';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.css']
})
export class DishListComponent implements OnInit {
  dishes: any[] = [];
  restaurantId: number | null = null;
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private restaurantService: RestaurantService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.restaurantId = +params.get('id')!;
      if (this.restaurantId) {
        // Fetch dishes for a specific restaurant
        this.restaurantService.getDishesByRestaurantId(this.restaurantId).subscribe((data: any) => {
          this.dishes = data;
          this.isLoading = false;
        });
      } else {
        // Fetch all dishes
        this.restaurantService.getAllDishes().subscribe((data: any) => {
          this.dishes = data;
          this.isLoading = false;
        });
      }
    });
  }
}