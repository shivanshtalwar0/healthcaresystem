import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MangeTestComponent } from './mange-test.component';

describe('MangeTestComponent', () => {
  let component: MangeTestComponent;
  let fixture: ComponentFixture<MangeTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MangeTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MangeTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
