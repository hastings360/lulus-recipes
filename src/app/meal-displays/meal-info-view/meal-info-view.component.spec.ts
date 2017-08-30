import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealInfoViewComponent } from './meal-info-view.component';

describe('MealInfoViewComponent', () => {
  let component: MealInfoViewComponent;
  let fixture: ComponentFixture<MealInfoViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealInfoViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealInfoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
