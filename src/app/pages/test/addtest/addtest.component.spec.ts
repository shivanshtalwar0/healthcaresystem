import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtestComponent } from './addtest.component';

describe('AddtestComponent', () => {
  let component: AddtestComponent;
  let fixture: ComponentFixture<AddtestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
