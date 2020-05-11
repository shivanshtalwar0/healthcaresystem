import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDiagnosticCenterComponent } from './add-diagnostic-center.component';

describe('AddDiagnosticCenterComponent', () => {
  let component: AddDiagnosticCenterComponent;
  let fixture: ComponentFixture<AddDiagnosticCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDiagnosticCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDiagnosticCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
