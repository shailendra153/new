import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosePinComponent } from './nose-pin.component';

describe('NosePinComponent', () => {
  let component: NosePinComponent;
  let fixture: ComponentFixture<NosePinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NosePinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NosePinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
