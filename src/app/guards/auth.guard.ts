import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { getAuth } from 'firebase/auth';
import { app } from '../../environment/firebaseenvironment';
import { LoginService } from '../services/login.service';

export const authGuard: CanActivateFn = (route, state) => {
  const service=inject(LoginService);
  const router=inject(Router)
  const auth=getAuth(app);
  if(!auth.currentUser){
    console.log(auth)
    router.navigateByUrl('authenticate')
    return false
  }
  return true
  console.log('dfghjk')
  // return service.implementlogin()

};
