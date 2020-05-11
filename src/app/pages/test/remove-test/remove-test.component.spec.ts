import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveTestComponent } from './remove-test.component';

describe('RemoveTestComponent', () => {
  let component: RemoveTestComponent;
  let fixture: ComponentFixture<RemoveTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
