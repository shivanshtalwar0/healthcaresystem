import {Component, Inject, OnInit} from '@angular/core';
import {DiagnosticCenterService} from '../../../services/diagnostic-center.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {DiagnosticCenter} from '../../../model/DiagnosticCenter';
import {TestModel} from '../../../model/testmodel';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TestService} from '../../../services/test.service';

@Component({
  selector: 'app-mange-test',
  templateUrl: './mange-test.component.html',
  styleUrls: ['./mange-test.component.css']
})
export class MangeTestComponent implements OnInit {

  constructor(public testService: TestService, private diagnosticCenterService: DiagnosticCenterService,
              public dialogRef: MatDialogRef<MangeTestComponent>,
              @Inject(MAT_DIALOG_DATA) public data: { index: number }) {
  }

  addTestForm = new FormGroup({
    'testId': new FormControl('', [Validators.required])
  });

  get testList(): TestModel[] {
    return this.diagnosticCenterService.centers[this.data.index].testList;
  }

  get testsNotAdded() {
    let testList = [];
    try {
      testList = this.testList.map((t) => t.testId);
    } catch (e) {
    }
    return this.testService.testList.filter((t) => !testList.includes(t.testId));
  }

  addTest() {
    let center: DiagnosticCenter = this.diagnosticCenterService.centers[this.data.index];
    this.diagnosticCenterService.addTestToCenter(
      center.centerId, this.addTestForm.value.testId)
      .subscribe((d) => {
        this.diagnosticCenterService.getTestList(center, this.data.index);
        this.addTestForm.reset();
      });
  }

  ngOnInit(): void {
    this.testService.getTestList();
  }

}
