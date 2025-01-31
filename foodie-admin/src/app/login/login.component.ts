import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../service/auth/auth.service';
import { UserstorageService } from '../service/storage/userstorage.service';

@Component({
  selector: 'app-login',
  standalone: false,

  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {

  loginForm!: FormGroup;

  hidePassword = true;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router
  ){ }
 
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email : [null, [Validators.required]],
      password : [null, [Validators.required]],
    })
  }

  togglePasswordVisibility(){
    this.hidePassword = !this.hidePassword;
  }

  onSubmit(): void{

    const username = this.loginForm.get('email')!.value;
    const password = this.loginForm.get('password')!.value;

    this.authService.login(username,password).subscribe(
      (res) => {

        if(UserstorageService.isAdminLoggedIn()){
          this.router.navigateByUrl('admin/dashboard');
        }
        else if(UserstorageService.isCustomerLoggedIn()){
          this.router.navigateByUrl('customer/dashboard');
        }

        
        
      },

      (error) =>{
        this.snackBar.open('Bad Credentials', 'ERROR', {duration: 5000});
      }
    )


  }

}