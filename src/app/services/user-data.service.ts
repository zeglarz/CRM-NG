import { Injectable } from '@angular/core';
import {UserData} from '../interfaces/user-data';

@Injectable()
export class UserDataService {
  public userData: UserData;

  constructor() { }

  public get isAuthenticated(): boolean {
    // return this.userData !== undefined;
    //TODO: Temporary.
    return true;
  }

  public setUserData(userData: UserData): void {
    this.userData = userData;
  }
  public logout(): void {
    this.userData = undefined;
  }
}
