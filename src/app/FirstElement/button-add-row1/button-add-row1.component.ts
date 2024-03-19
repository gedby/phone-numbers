import { Component,  EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button-add-row1',
  templateUrl: './button-add-row1.component.html',
  styleUrl: './button-add-row1.component.css'
})
export class ButtonAddRow1Component {
  @Output() navigate = new EventEmitter<string>();

  onSelect() {
    this.navigate.emit('element2');
  }
}
