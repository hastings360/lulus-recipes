import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealImageViewComponent } from './meal-image-view.component';

describe('MealImageViewComponent', () => {
  let component: MealImageViewComponent;
  let fixture: ComponentFixture<MealImageViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealImageViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealImageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
