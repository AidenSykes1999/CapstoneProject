import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminService } from '../../service/admin.service';

@Component({
  selector: 'app-post-dish',
  standalone: false,
  templateUrl: './post-dish.component.html',
  styleUrl: './post-dish.component.css'
})
export class PostDishComponent {

  dishForm: FormGroup;
  listOfRestaurants: any = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private adminService: AdminService
  ){}

  ngOnInit(): void{
    this.dishForm = this.fb.group({
      restaurantId: [null, [Validators.required]],
      name: [null, [Validators.required]],
      price: [null, [Validators.required]],



    });

    this.getAllRestaurants();

  }
  getAllRestaurants() {
    this.adminService.getAllRestaurants().subscribe(
      res => {
        console.log("Fetched restaurants:", res);
        this.listOfRestaurants = res;
      },
      error => {
        console.error("Error fetching restaurants:", error);
        console.error("Error Details:", error.message); // Log error message
      }
    );
  }

    addDish(): void{
      if(this.dishForm.valid){
        const formData: FormData = new FormData();
        formData.append('restaurantId', this.dishForm.get('restaurantId').value);
        formData.append('name', this.dishForm.get('name').value);
        formData.append('price', this.dishForm.get('price').value);

        this.adminService.addDish(formData).subscribe((res) =>{
          if (res.id != null){
            this.snackBar.open('Dish Created Successfully!', 'Close',{
              duration: 5000
            });
            this.router.navigateByUrl('/admin/dashboard');
          }else{
            this.snackBar.open(res.message, 'ERROR',{
              duration: 5000,
               panelClass: 'error-snackbar'
            });
          }
        })

      }else{
        for (const i in this.dishForm.controls){
          this.dishForm.controls[i].markAsDirty();
          this.dishForm.controls[i].updateValueAndValidity;
        }
      }
      
    }

}
