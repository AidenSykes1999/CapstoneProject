import { CanActivateFn, Router } from '@angular/router';
import { UserService } from './user.service';
import { inject } from '@angular/core';

export const AuthGuard: CanActivateFn = (route, state) => {
  const us : UserService = inject(UserService); 
   const router:Router = inject(Router); 
 
     console.log('auth guard') 
     
     if(us.isAuthenticated()){ 
        return true; 
     } 
     alert('Please Login') 
     router.navigate(['login']) 
       return false; 
};