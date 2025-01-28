import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit {
  restaurantForm!: FormGroup; // Definite assignment assertion

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.restaurantForm = this.fb.group({
      name: ['', Validators.required],
      location: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.restaurantForm.valid) {
      console.log(this.restaurantForm.value);
      // Call backend API to save restaurant
    }
  }
}