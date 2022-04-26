import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnkletsComponent } from './anklets.component';

describe('AnkletsComponent', () => {
  let component: AnkletsComponent;
  let fixture: ComponentFixture<AnkletsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnkletsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnkletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
