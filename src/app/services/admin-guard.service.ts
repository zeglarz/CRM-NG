import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router, UrlSegment} from '@angular/router';
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
      const back: string[] = route.url.map((segment: UrlSegment) => segment.path);
      console.log(['/', ...back]);
      this.router.navigate(['auth', 'login']);
    }
    return isAuthenticated;
  }
}
