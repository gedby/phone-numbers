import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAddRow1Component } from './button-add-row1.component';

describe('ButtonAddRow1Component', () => {
  let component: ButtonAddRow1Component;
  let fixture: ComponentFixture<ButtonAddRow1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonAddRow1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonAddRow1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
