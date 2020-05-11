import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatOptionModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DiagnosticCenterComponent } from './pages/diagnostic-center/diagnostic-center.component';
import { AddDiagnosticCenterComponent } from './pages/diagnostic-center/add-diagnostic-center/add-diagnostic-center.component';
import { ViewDiagnosticCenterComponent } from './pages/diagnostic-center/view-diagnostic-center/view-diagnostic-center.component';
import {MatDialogModule} from '@angular/material/dialog';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './pages/home/home.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { TestComponent } from './pages/test/test.component';
import { AddtestComponent } from './pages/test/addtest/addtest.component';
import { ViewtestComponent } from './pages/test/viewtest/viewtest.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import { InsertTestComponent } from './pages/test/insert-test/insert-test.component';
import { RemoveTestComponent } from './pages/test/remove-test/remove-test.component';
import {HttpClientModule} from '@angular/common/http';

import { TestmanagementComponent } from './pages/testmanagement/testmanagement.component';
import { DeletetestComponent } from './pages/testmanagement/deletetest/deletetest.component';
import { InputtestComponent } from './pages/testmanagement/inputtest/inputtest.component';




@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    DiagnosticCenterComponent,
    AddDiagnosticCenterComponent,
    ViewDiagnosticCenterComponent,
    HomeComponent,
    TestComponent,
    AddtestComponent,
    ViewtestComponent,
    InsertTestComponent,
    RemoveTestComponent,

    TestmanagementComponent,

    DeletetestComponent,

    InputtestComponent,
   
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatOptionModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    NgbModule,
    ReactiveFormsModule,
    MatSelectModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
