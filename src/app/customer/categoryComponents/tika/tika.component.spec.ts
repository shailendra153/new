import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TikaComponent } from './tika.component';

describe('TikaComponent', () => {
  let component: TikaComponent;
  let fixture: ComponentFixture<TikaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TikaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
