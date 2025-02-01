import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  dishes: any[] = [];
  searchDishForm: FormGroup;
  listOfRestaurants: any[] = []; // Store all restaurants

  constructor(private customerService: CustomerService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ){}

  ngOnInit(){
    this.getAllDishes();
    this.getAllRestaurants(); // Fetch restaurants
    this.searchDishForm = this.fb.group({
      title: [null, [Validators.required]]
    });
  }

  getAllDishes(){
    this.dishes = [];
    this.customerService.getAllDishes().subscribe(res => {
      this.dishes = res;
      console.log(this.dishes);
    });
  }

  getAllRestaurants(){
    this.customerService.getAllRestaurants().subscribe(res => {
      this.listOfRestaurants = res;
    });
  }

  getRestaurantName(restaurantId: number): string {
    const restaurant = this.listOfRestaurants.find(r => r.id === restaurantId);
    return restaurant ? restaurant.name : 'Unknown';
  }

  submitForm(){
    this.dishes = [];
    const title = this.searchDishForm.get('title')!.value;
    this.customerService.getAllDishesByName(title).subscribe(res => {
      this.dishes = res;
      console.log(this.dishes);
    });
  }
}
