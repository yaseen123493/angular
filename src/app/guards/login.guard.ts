import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  CanMatchFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { ServicesService } from '../services.service';
import { inject } from '@angular/core';

export const loginGuard: CanActivateFn | CanMatchFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const router: Router = inject(Router);
  const authService: ServicesService = inject(ServicesService);
  if (authService.isloggedin) {
    return true;
  }
  router.navigate(['/login']);
  return false;
};
