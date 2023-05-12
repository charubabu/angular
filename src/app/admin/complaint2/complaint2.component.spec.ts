import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Complaint2Component } from './complaint2.component';

describe('Complaint2Component', () => {
  let component: Complaint2Component;
  let fixture: ComponentFixture<Complaint2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Complaint2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Complaint2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
