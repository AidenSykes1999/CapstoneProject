import { Component, OnInit } from '@angular/core';
import { DishService } from '../dish.service';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html'
})
export class DishListComponent implements OnInit {
  dishes: any[] = [];

  constructor(private dishService: DishService) {}

  ngOnInit() {
    this.loadDishes();
  }

  loadDishes() {
    this.dishService.getDishes().subscribe((data: any) => {
      this.dishes = data;
    });
  }

  deleteDish(id: number) {
    this.dishService.deleteDish(id).subscribe(() => {
      this.loadDishes();
    });
  }
}