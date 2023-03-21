import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuceessAlertComponent } from './suceess-alert.component';

describe('SuceessAlertComponent', () => {
  let component: SuceessAlertComponent;
  let fixture: ComponentFixture<SuceessAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuceessAlertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuceessAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
