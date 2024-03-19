import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhoneNumberService {
  private phoneNumbers: { name: string, phoneNumbers: { number: string }[] }[] = [];

  constructor() { }

  addPhoneNumber(formData: { name: string, phoneNumbers: { number: string }[] }) {
    this.phoneNumbers.push(formData);
  }

  getPhoneNumbers() {
    return this.phoneNumbers;
  }
}