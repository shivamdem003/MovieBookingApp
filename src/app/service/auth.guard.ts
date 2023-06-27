
// import {CanActivateFn ,Router} from '@angular/router';

// export const authGuard: CanActivateFn = (route, state) => {

//   if(localStorage.getItem('token')==null){
//     alert("You are not logged in!!");
//     return false;
//   }
//   return true;
// };
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
//let headers=new HttpHeaders().set("Authorization",`Bearer ${JSON.parse(localStorage.getItem('user')|| '{}').mapObj.token}`)
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (localStorage.getItem('user') == null) {
      alert('Please Login!!');
      this.router.navigate(['/login']); // Redirect to login page if not logged in
      return false;
    }
    return true;
  }
}




