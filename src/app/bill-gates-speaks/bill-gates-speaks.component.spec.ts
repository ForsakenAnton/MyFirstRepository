import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillGatesSpeaksComponent } from './bill-gates-speaks.component';

describe('BillGatesSpeaksComponent', () => {
  let component: BillGatesSpeaksComponent;
  let fixture: ComponentFixture<BillGatesSpeaksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillGatesSpeaksComponent ]
    })
    .compileComponents(); 
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillGatesSpeaksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
