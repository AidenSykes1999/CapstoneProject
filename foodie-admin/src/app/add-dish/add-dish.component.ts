import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-dish',
  templateUrl: './add-dish.component.html',
  styleUrls: ['./add-dish.component.css']
})
export class AddDishComponent implements OnInit {
  dishForm!: FormGroup; // Definite assignment assertion

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.dishForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      restaurantId: ['', Validators.required],
    });
  }


  onSubmit(): void {
    if (this.dishForm.valid) {
      console.log(this.dishForm.value);
      // Call backend API to save dish
    }
  }
}