import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AbstractControl, FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';

import {Observable, of} from 'rxjs';
import {filter, map, switchMap, takeUntil} from 'rxjs/operators';
import * as firebase from 'firebase';

import {Customer, PhoneType} from '../../../interfaces/customer';
import {StorageService} from '../../../services/storage.service';
import {Destroyable} from '../../../destroyable';
import {FormFields} from '../../../interfaces/form-fields';
import {CustomerValidators} from './customer-validators';
import {Config, CONFIG, Level} from '../../../interfaces/config';
import {ApiService} from '../../../services/api.service';
import {CrmApiService} from '../../../services/crm-api.service';
import DocumentReference = firebase.firestore.DocumentReference;

export interface OptionItem {
  value: string;
  label: string;
}

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss'],
  providers: [
    {
      provide: CONFIG,
      useValue: {
        url: '',
        count: 10,
        level: Level.LOW,
      }
    }
  ],
})
export class CustomerFormComponent extends Destroyable implements OnInit {
  public formGroup: FormGroup;
  public customer$: Observable<Customer>;
  public email$: Observable<string>;
  public lastName$: Observable<string>;
  public formFields: typeof FormFields = FormFields;
  public phoneType: typeof PhoneType = PhoneType;

  public phonesTypes: OptionItem[] = [
    {value: PhoneType.MOBILE, label: 'Telefon komórkowy'},
    {value: PhoneType.HOME, label: 'Telefon domowy'},
    {value: PhoneType.OFFICE, label: 'Telefon biurowy'},
  ];

  constructor(
    private formBuilder: FormBuilder,
    private storageService: StorageService,
    private route: ActivatedRoute,
    private router: Router,
    private api: ApiService,
    private crmService: CrmApiService,
    @Inject(CONFIG) private appConf: Config,
  ) {
    super();
  }

  public get phonesArray(): FormArray {
    return this.formGroup.get(FormFields.phones) as FormArray;
  }

  public ngOnInit(): void {
    this.buildForm();
    this.route.params.pipe(takeUntil(this.destroyed$)).subscribe(() => {
    });
  }

  public addPhone(): void {
    this.phonesArray.push(this.createPhoneGroup());
  }

  public removePhone(index: number) {
    this.phonesArray.removeAt(index);
  }

  public getError(field: FormFields, errorCode: string): boolean {
    const control: AbstractControl = this.formGroup.get(field);
    return control.getError(errorCode);
  }

  private buildForm(): void {
    this.formGroup = this.formBuilder.group({
      [FormFields.firstName]: ['', [Validators.minLength(3)]],
      [FormFields.lastName]: ['', [Validators.required]],
      [FormFields.email]: ['', [Validators.required, Validators.email]],
      [FormFields.phones]: this.formBuilder.array([]),
    });
    this.addPhone();

    this.customer$ = this.formGroup.valueChanges;

    this.customer$.pipe(takeUntil(this.destroyed$))
      .subscribe((customer: Customer) => {
        this.storageService.nextCustomer(customer);
      });

    this.email$ = this.customer$.pipe(
      filter((customer: Customer) => customer.email !== ''),
      map((customer: Customer) => customer.email)
    );

    this.lastName$ = this.customer$.pipe(
      filter((customer: Customer) => customer.lastName !== ''),
      map((customer: Customer) => customer.lastName)
    );


    this.email$.pipe(switchMap((email: string) => this.capiltalize$(email)))
      .subscribe((data: string) => {
        console.log(data);
      });
  }

  public getFormData(): void {
    console.log('raw value', this.formGroup.getRawValue());
  }

  public capiltalize$(data: string): Observable<string> {
    return of(data.toUpperCase());
  }

  public async saveCustomer(): Promise<void> {
    const customer: Customer = this.formGroup.getRawValue() as Customer;
    await this.crmService.saveCustomer(customer)
      .then(() => this.router.navigate(['/', 'customers']));
  }

  private customerChangeHandler(customer: Customer) {
    console.log(customer);
  }

  private createPhoneGroup(): FormGroup {
    return this.formBuilder.group({
      [FormFields.phoneNumber]: ['', CustomerValidators.phoneNumber],
      [FormFields.phoneType]: [PhoneType.MOBILE],
    }, {validators: CustomerValidators.mobilePhone});
  }
}
