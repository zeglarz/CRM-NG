import {Injectable} from '@angular/core';
import {UserData} from '../interfaces/user-data';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private userData: UserData;

  constructor() {
  }

  public get isAuthenticated(): boolean {
    return this.userData !== undefined;
  }

  public setUserData(userData: UserData): void {
    this.userData = userData;
  }

  public logout(): void {
    this.userData = undefined;
  }
}
