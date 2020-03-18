import {Component, Input, OnInit} from '@angular/core';
import {UserData} from '../../../interfaces/user-data';
import {UserDataService} from '../../../services/user-data.service';

@Component({
  selector: 'app-user-data-presenter',
  templateUrl: './user-data-presenter.component.html',
  styleUrls: ['./user-data-presenter.component.scss']
})
export class UserDataPresenterComponent implements OnInit {
  @Input() public userData: UserData;

  constructor(private userDataService: UserDataService) {
  }

  public get userData: UserData {
    return this.userDataService.userData;
  }

  ngOnInit(): void {
  }

}
