import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HairsBroochesComponent } from './hairs-brooches.component';

describe('HairsBroochesComponent', () => {
  let component: HairsBroochesComponent;
  let fixture: ComponentFixture<HairsBroochesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HairsBroochesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HairsBroochesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
