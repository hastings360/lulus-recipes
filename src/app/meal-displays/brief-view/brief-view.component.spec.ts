import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BriefViewComponent } from './brief-view.component';

describe('BriefViewComponent', () => {
  let component: BriefViewComponent;
  let fixture: ComponentFixture<BriefViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BriefViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BriefViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
