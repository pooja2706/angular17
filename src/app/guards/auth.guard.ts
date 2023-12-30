import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  console.log(localStorage.getItem('loggedIn'))
  const router=inject(Router);
  if(localStorage.getItem('loggedIn')){
    return true;
  }
  else{
    router.navigateByUrl('authenticate')
  }

  return !!localStorage.getItem('loggedIn');
};
