import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PandentsComponent } from './pandents.component';

describe('PandentsComponent', () => {
  let component: PandentsComponent;
  let fixture: ComponentFixture<PandentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PandentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PandentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
