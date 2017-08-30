import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleFullViewComponent } from './single-full-view.component';

describe('SingleFullViewComponent', () => {
  let component: SingleFullViewComponent;
  let fixture: ComponentFixture<SingleFullViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleFullViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleFullViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
