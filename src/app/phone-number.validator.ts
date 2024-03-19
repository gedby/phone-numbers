import { AbstractControl, ValidatorFn } from '@angular/forms';

export function phoneNumberValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const phoneNumberPattern = /^\+\d{13,13}$/; 
    const valid = phoneNumberPattern.test(control.value);
    return valid ? null : { 'invalidPhoneNumber': { value: control.value } };
  };
}