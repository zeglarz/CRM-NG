import {Component, OnInit} from '@angular/core';
import {UserDataService} from '../../services/user-data.service';

@Component({
  selector: 'app-logout',
  template: '<span></span>',
})
export class LogoutComponent implements OnInit {

  constructor(userDataService: UserDataService) {
  }

  ngOnInit(): void {
    this.userDataService.logout();
    this.router.navigate(['logout']);
  }

}
