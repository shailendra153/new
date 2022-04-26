import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElegantBroochesComponent } from './elegant-brooches.component';

describe('ElegantBroochesComponent', () => {
  let component: ElegantBroochesComponent;
  let fixture: ComponentFixture<ElegantBroochesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElegantBroochesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElegantBroochesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
