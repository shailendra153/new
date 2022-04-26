import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BridalKalireComponent } from './bridal-kalire.component';

describe('BridalKalireComponent', () => {
  let component: BridalKalireComponent;
  let fixture: ComponentFixture<BridalKalireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BridalKalireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BridalKalireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
