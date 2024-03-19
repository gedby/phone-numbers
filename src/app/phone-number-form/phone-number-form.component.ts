import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { PhoneNumberService } from './phone-number.service';
import { phoneNumberValidator } from '.././phone-number.validator'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-phone-number-form',
  templateUrl: './phone-number-form.component.html',
  styleUrls: ['./phone-number-form.component.css']
})
export class PhoneNumberFormComponent implements OnInit {
  phoneNumberForm!: FormGroup;
  @Output() saveCompleted = new EventEmitter<void>();

  constructor(
    private fb: FormBuilder,
    private phoneNumberService: PhoneNumberService,
    private router: Router
  ) { }

  ngOnInit() {
    this.phoneNumberForm = this.fb.group({
      name: ['', Validators.required],
      phoneNumbers: this.fb.array([
        this.fb.control('', [Validators.required, phoneNumberValidator()]) 
      ])
    });
  }

  get phoneNumbers(): FormArray {
    return this.phoneNumberForm.get('phoneNumbers') as FormArray;
  }

  addPhoneNumber() {
    const control = this.fb.control('', [Validators.required, phoneNumberValidator()]);
    this.phoneNumbers.push(control);
  }

  removePhoneNumber(index: number) {
    this.phoneNumbers.removeAt(index);
  }

  savePhoneNumber() {
    const formData = {
      name: this.phoneNumberForm.get('name')?.value,
      phoneNumbers: this.phoneNumbers.controls.map(control => ({ number: control.value }))
    };
    this.phoneNumberService.addPhoneNumber(formData);
    this.phoneNumberForm.reset();
    // this.saveCompleted.emit();
    this.navigatePhoneNumber();
  }

  navigatePhoneNumber() {
    this.router.navigate(['/element1']);
  }
}