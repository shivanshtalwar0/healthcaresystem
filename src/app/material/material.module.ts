import { NgModule } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
// import { MatNativeDateModule } from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
// import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';



const material=[MatDialogModule,MatButtonModule,MatFormFieldModule,MatDatepickerModule,MatTabsModule,MatIconModule];

@NgModule({
  imports: [material],
  exports:[material]
})
export class MaterialModule { }
