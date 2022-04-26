import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToeRingsComponent } from './toe-rings.component';

describe('ToeRingsComponent', () => {
  let component: ToeRingsComponent;
  let fixture: ComponentFixture<ToeRingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToeRingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToeRingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
