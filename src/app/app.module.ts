import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatNativeDateModule, MatOptionModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DiagnosticCenterComponent } from './pages/diagnostic-center/diagnostic-center.component';
import { AddDiagnosticCenterComponent } from './pages/diagnostic-center/add-diagnostic-center/add-diagnostic-center.component';
import { ViewDiagnosticCenterComponent } from './pages/diagnostic-center/view-diagnostic-center/view-diagnostic-center.component';
import {MatDialogModule} from '@angular/material/dialog';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './pages/home/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ShashankComponent } from './components/shashank/shashank.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    DiagnosticCenterComponent,
    AddDiagnosticCenterComponent,
    ViewDiagnosticCenterComponent,
    HomeComponent,
    ShashankComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatOptionModule,
    MatButtonModule,
    MatDialogModule,
    NgbModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
