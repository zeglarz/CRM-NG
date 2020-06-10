import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserData} from '../../../interfaces/user-data';

@Component({
  selector: 'app-user-data-presenter',
  templateUrl: './user-data-presenter.component.html',
  styleUrls: ['./user-data-presenter.component.scss']
})
export class UserDataPresenterComponent implements OnInit {

  @Input() public userData: UserData;
  @Output() public clearUser: EventEmitter<void> = new EventEmitter<void>();
  @Input() public role = 'user';

  constructor() {
  }

  public ngOnInit(): void {
  }

  public clearUserDataHandler(): void {
    this.clearUser.emit();
  }
}
