import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowerJewelleryComponent } from './flower-jewellery.component';

describe('FlowerJewelleryComponent', () => {
  let component: FlowerJewelleryComponent;
  let fixture: ComponentFixture<FlowerJewelleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlowerJewelleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowerJewelleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
