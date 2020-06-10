import {Component, OnInit} from '@angular/core';
import {UserDataService} from '../../services/user-data.service';
import {UserData} from '../../interfaces/user-data';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  role: string;
  constructor(private userDataService: UserDataService) {
  }

  public get userData(): UserData {
    return this.userDataService.userData;
  }

  public ngOnInit(): void {
  }

  public clearUserHandler() {
    console.log('User should be cleared');
  }
}
