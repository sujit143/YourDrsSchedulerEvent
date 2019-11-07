import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralsourceComponent } from './referralsource.component';

describe('ReferralsourceComponent', () => {
  let component: ReferralsourceComponent;
  let fixture: ComponentFixture<ReferralsourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferralsourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferralsourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
