import { Component } from '@angular/core';
import { DishService } from '../dish.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dish-form',
  templateUrl: './dish-form.component.html'
})
export class DishFormComponent {
  dish = { name: '', price: 0, restaurant_id: null };

  constructor(private dishService: DishService, private router: Router) {}

  save() {
    this.dishService.addDish(this.dish).subscribe(() => {
      this.router.navigate(['/dishes']);
    });
  }
}