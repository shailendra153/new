import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BridalBanglesComponent } from './bridal-bangles.component';

describe('BridalBanglesComponent', () => {
  let component: BridalBanglesComponent;
  let fixture: ComponentFixture<BridalBanglesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BridalBanglesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BridalBanglesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
