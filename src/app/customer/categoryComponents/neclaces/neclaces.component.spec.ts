import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeclacesComponent } from './neclaces.component';

describe('NeclacesComponent', () => {
  let component: NeclacesComponent;
  let fixture: ComponentFixture<NeclacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeclacesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeclacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
