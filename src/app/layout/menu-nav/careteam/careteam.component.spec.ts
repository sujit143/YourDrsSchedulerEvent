import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareteamComponent } from './careteam.component';

describe('CareteamComponent', () => {
  let component: CareteamComponent;
  let fixture: ComponentFixture<CareteamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareteamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
