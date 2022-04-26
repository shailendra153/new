import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RajputiBorlaComponent } from './rajputi-borla.component';

describe('RajputiBorlaComponent', () => {
  let component: RajputiBorlaComponent;
  let fixture: ComponentFixture<RajputiBorlaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RajputiBorlaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RajputiBorlaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
