import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletetestComponent } from './deletetest.component';

describe('DeletetestComponent', () => {
  let component: DeletetestComponent;
  let fixture: ComponentFixture<DeletetestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletetestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletetestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
