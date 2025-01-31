import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminService } from '../../service/admin.service';

@Component({
  selector: 'app-postrestaurant',
  standalone: false,
  templateUrl: './postrestaurant.component.html',
  styleUrl: './postrestaurant.component.css'
})
export class PostrestaurantComponent {

  restaurantForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private adminService: AdminService


  ){ }

  ngOnInit(): void{
    this.restaurantForm = this.fb.group({
      name: [null, [Validators.required]],
      location: [null, [Validators.required]]


    })
  }

  addRestaurant(): void {

    if(this.restaurantForm.valid){
      this.adminService.addRestaurant(this.restaurantForm.value).subscribe((res) =>{

        if(res.id !=null){
          this.snackBar.open('Restaurant Created Successfully!','Close',{
            duration: 5000
          });
          this.router.navigateByUrl('/admin/dashboard');
        } else{
          this.snackBar.open(res.message, 'Close', {
            duration: 5000,
            panelClass: 'error-snackbar'
          });
        }

      })
    }else{
      this.restaurantForm.markAllAsTouched();
    }

  }

}
