import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoronetComponent } from './coronet.component';

describe('CoronetComponent', () => {
  let component: CoronetComponent;
  let fixture: ComponentFixture<CoronetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoronetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoronetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
