import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { UserstorageService } from '../service/storage/userstorage.service';

@Component({
  selector: 'app-header',
  standalone: false,

  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isCustomerLoggedIn : boolean = UserstorageService.isCustomerLoggedIn();
  isAdminLoggedIn : boolean = UserstorageService.isAdminLoggedIn();
  constructor(public user: UserService, private router: Router) {}

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