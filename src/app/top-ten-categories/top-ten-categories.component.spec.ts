import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTenCategoriesComponent } from './top-ten-categories.component';

describe('CategoriesComponent', () => {
  let component: TopTenCategoriesComponent;
  let fixture: ComponentFixture<TopTenCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopTenCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopTenCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
