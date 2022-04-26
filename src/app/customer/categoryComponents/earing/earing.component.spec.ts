import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EaringComponent } from './earing.component';

describe('EaringComponent', () => {
  let component: EaringComponent;
  let fixture: ComponentFixture<EaringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EaringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EaringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
