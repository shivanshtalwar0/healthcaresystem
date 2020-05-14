import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfulMessageComponent } from './successful-message.component';

describe('SuccessfulMessageComponent', () => {
  let component: SuccessfulMessageComponent;
  let fixture: ComponentFixture<SuccessfulMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessfulMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessfulMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
