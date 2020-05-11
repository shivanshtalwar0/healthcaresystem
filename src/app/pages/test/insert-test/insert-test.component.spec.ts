import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertTestComponent } from './insert-test.component';

describe('InsertTestComponent', () => {
  let component: InsertTestComponent;
  let fixture: ComponentFixture<InsertTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
