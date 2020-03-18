import {Component, OnInit} from '@angular/core';
import {UserDataService} from '../../services/user-data.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  authForm: FormGroup;

  constructor(private userDataService: UserDataService, private formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
    this.authForm = this.formBuilder.group({
      login: [''],
      password: ['']
    });
  }

  submit(): void {
// @TODO: autentykacja użytkownika
    console.log(this.authForm.getRawValue());
    this.userDataService.setUserData({
      name: 'John',
      email: 'john.smith@foo.pl'
    });
    this.router.navigate(['/', 'auth']);
  }

}
