import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtestComponent } from './viewtest.component';

describe('ViewtestComponent', () => {
  let component: ViewtestComponent;
  let fixture: ComponentFixture<ViewtestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewtestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
