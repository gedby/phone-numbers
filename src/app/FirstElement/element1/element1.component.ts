import { Component, EventEmitter, Output, OnInit  } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PhoneNumberService } from '../../phone-number-form/phone-number.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-element1',
  templateUrl: './element1.component.html',
  styleUrl: './element1.component.css'
})
export class Element1Component implements OnInit{
  @Output() navigate = new EventEmitter<string>();
 
  loadedFeature = 'element1';
  phoneNumbers: { name: string, phoneNumber: string }[] = [];
  filteredPhoneNumbers: { name: string, phoneNumber: string }[] = [];
  searchQuery: string = '';
  showFilteredData = false;

  
  constructor(private phoneNumberService: PhoneNumberService, private router: Router) { 
    this.filteredPhoneNumbers = [...this.phoneNumbers];
  }

  ngOnInit(): void {
    const rawPhoneData = this.phoneNumberService.getPhoneNumbers();
    this.phoneNumbers = rawPhoneData.map(entry => ({
      name: entry.name,
      phoneNumber: entry.phoneNumbers.map(phone => phone.number).join(', ')
    }));
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

  onSelect() {
    this.navigate.emit('element2');
  }

  filterData() {
    if (!this.searchQuery.trim()) {
      this.filteredPhoneNumbers = [];
     this.showFilteredData = false;
    } 
    
    else {
      this.filteredPhoneNumbers = this.phoneNumbers.filter(phone => 
        phone.name.toLowerCase() === this.searchQuery.toLowerCase()
      );
      this.showFilteredData = this.filteredPhoneNumbers.length > 0;
    }
  }

  navigateToPhoneNumberForm() {
    this.router.navigate(['/phone-number-form']);
  }
}
