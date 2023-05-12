import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AforumBoxComponent } from './aforum-box.component';

describe('AforumBoxComponent', () => {
  let component: AforumBoxComponent;
  let fixture: ComponentFixture<AforumBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AforumBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AforumBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
