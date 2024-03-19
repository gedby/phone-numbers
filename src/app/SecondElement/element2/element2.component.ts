import { Component, Output, EventEmitter} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-element2',
  templateUrl: './element2.component.html',
  styleUrl: './element2.component.css'
})
export class Element2Component {
  @Output() navigate = new EventEmitter<string>();
  showAdditionalField: boolean = false;
  loadedFeature = 'element2';
  myForm: FormGroup; 

  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      name: ['', Validators.required],
      number: ['', Validators.required]
    });
  }

  get formControls() {
    return this.myForm.controls;
  }

  addValue() {
    if (this.myForm.valid) {
    }
  }

  addNumberField() {
    this.showAdditionalField = true;
    
  }
 
  onSaveCompleted() {
    console.log('Save completed in Element2Component');
    this.navigate.emit('element1');
  }
}
