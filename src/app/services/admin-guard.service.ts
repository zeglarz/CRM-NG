import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlSegment} from '@angular/router';
import {UserDataService} from './user-data.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate {

  constructor(private userDataService: UserDataService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isAuthenticated: boolean = this.userDataService.isAuthenticated;
    if (!isAuthenticated) {
      this.router.navigate(['auth', 'login']);
    }
    return isAuthenticated;
  }
}
