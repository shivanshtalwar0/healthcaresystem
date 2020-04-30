import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDiagnosticCenterComponent } from './new-diagnostic-center.component';

describe('NewDiagnosticCenterComponent', () => {
  let component: NewDiagnosticCenterComponent;
  let fixture: ComponentFixture<NewDiagnosticCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDiagnosticCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDiagnosticCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
