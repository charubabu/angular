import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportedDietComponent } from './supported-diet.component';

describe('SupportedDietComponent', () => {
  let component: SupportedDietComponent;
  let fixture: ComponentFixture<SupportedDietComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupportedDietComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupportedDietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
