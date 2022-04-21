import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorySpecialComponent } from './category-special.component';

describe('CategorySpecialComponent', () => {
  let component: CategorySpecialComponent;
  let fixture: ComponentFixture<CategorySpecialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorySpecialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorySpecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
