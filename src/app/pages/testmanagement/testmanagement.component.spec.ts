import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestmanagementComponent } from './testmanagement.component';

describe('TestmanagementComponent', () => {
  let component: TestmanagementComponent;
  let fixture: ComponentFixture<TestmanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestmanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
