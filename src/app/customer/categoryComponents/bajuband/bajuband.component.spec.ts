import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BajubandComponent } from './bajuband.component';

describe('BajubandComponent', () => {
  let component: BajubandComponent;
  let fixture: ComponentFixture<BajubandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BajubandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BajubandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
