import { Component } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  dishes: any[] = [];
  searchDishForm: FormGroup;
  listOfRestaurants: any[] = []; // Store all restaurants

  constructor(private adminService: AdminService,
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
    this.adminService.getAllDishes().subscribe(res => {
      this.dishes = res;
      console.log(this.dishes);
    });
  }

  getAllRestaurants(){
    this.adminService.getAllRestaurants().subscribe(res => {
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
    this.adminService.getAllDishesByName(title).subscribe(res => {
      this.dishes = res;
      console.log(this.dishes);
    });
  }

  deleteDish(dishId: any){
    this.adminService.deleteDish(dishId).subscribe(res => {
      if (res?.body == null){
        this.snackBar.open('Dish Deleted Successfully', 'Close', {
          duration: 5000,
        });
        this.getAllDishes();
      } else {
        this.snackBar.open(res.message, 'Close', {
          duration: 5000,
          panelClass: 'error-snackbar'
        });
      }
    });
  }
}