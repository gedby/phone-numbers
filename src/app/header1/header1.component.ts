import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header1',
  templateUrl: './header1.component.html',
  styleUrl: './header1.component.css'
})
export class Header1Component {
  @Output() featureSelected = new EventEmitter<string>();

onSelect(feature: string) {
  this.featureSelected.emit(feature);
}
}
