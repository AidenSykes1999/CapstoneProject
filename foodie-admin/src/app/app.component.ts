import { Component } from '@angular/core';
import { UserstorageService } from './service/storage/userstorage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'foodie';

  isCustomerLoggedIn : boolean = UserstorageService.isCustomerLoggedIn();
  isAdminLoggedIn : boolean = UserstorageService.isAdminLoggedIn();

  constructor(private router: Router){}

  ngOnInit(): void{
    this.router.events.subscribe(event => {
      this.isCustomerLoggedIn = UserstorageService.isCustomerLoggedIn();
      this.isAdminLoggedIn = UserstorageService.isAdminLoggedIn();

    })
  }

  logout() {
    UserstorageService.signOut();
    this.router.navigateByUrl('login');
  }

  isEnabled:boolean = false; 
clicked(){ }

newrest:any;
newRestAdded(newrest:any){
  console.log(newrest)
  this.newrest = newrest;
}
}