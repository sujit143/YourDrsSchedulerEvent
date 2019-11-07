import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentmemoComponent } from './appointmentmemo.component';

describe('AppointmentmemoComponent', () => {
  let component: AppointmentmemoComponent;
  let fixture: ComponentFixture<AppointmentmemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentmemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentmemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
