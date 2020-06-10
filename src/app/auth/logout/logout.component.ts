import { Component, OnInit } from '@angular/core';
import {UserDataService} from "../../services/user-data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-logout',
  template: '<span></span>',
})
export class LogoutComponent implements OnInit {

  constructor(private userDataService: UserDataService, private router: Router) { }

  ngOnInit(): void {
    this.userDataService.logout();
    this.router.navigate(['auth', 'login']);
  }

}
