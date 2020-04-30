import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDiagnosticCenterComponent } from './view-diagnostic-center.component';

describe('ViewDiagnosticCenterComponent', () => {
  let component: ViewDiagnosticCenterComponent;
  let fixture: ComponentFixture<ViewDiagnosticCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDiagnosticCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDiagnosticCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
