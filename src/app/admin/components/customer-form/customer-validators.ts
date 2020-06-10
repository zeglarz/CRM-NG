import {AbstractControl, FormGroup} from '@angular/forms';
import {PhoneType} from '../../../interfaces/customer';
import {FormFields} from '../../../interfaces/form-fields';

type ValidationResult = { [key: string]: boolean } | null;

export class CustomerValidators {
  public static phoneNumber(control: AbstractControl): ValidationResult {
    const value: string = control.value;
    const patternCheck: boolean = /[\d+]/.test(value);
    const lengthCheck: boolean = value.length >= 5;

    if (!patternCheck || !lengthCheck) {
      return {
        pattern: !patternCheck,
        lenght: !lengthCheck,
      };
    }
    return null;
  }

  public static mobilePhone(control: AbstractControl): ValidationResult {
    const group: FormGroup = control as FormGroup;
    const type: PhoneType = group.get(FormFields.phoneType).value;
    const phone: string = group.get(FormFields.phoneNumber).value;
    const lengthCheck: boolean = phone.length === 9;

    if (type === PhoneType.MOBILE && !lengthCheck) {
      return {
        'phone-number-length': true,
      };
    }
    return null;
  }
}
