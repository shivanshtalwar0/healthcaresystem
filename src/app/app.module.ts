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
import { AppointmentComponent } from './pages/appointment/appointment.component';
import { MakeAppointmentComponent } from './pages/appointment/make-appointment/make-appointment.component';
import { ViewAppointmentComponent } from './pages/appointment/view-appointment/view-appointment.component';
import { MaterialModule } from './material/material.module';
// import { AppointmentmessageComponent } from './pages/appointmentmessage/appointmentmessage.component';
import { AppointmentMessageComponent } from './pages/appointment/appointment-message/appointment-message.component';
import { AppointmenthandlerService } from './services/appointmenthandler.service';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    DiagnosticCenterComponent,
    AddDiagnosticCenterComponent,
    ViewDiagnosticCenterComponent,
    HomeComponent,
    AppointmentComponent,
    MakeAppointmentComponent,
    ViewAppointmentComponent,
    // AppointmentmessageComponent,
    AppointmentMessageComponent,
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
    MaterialModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [AppointmenthandlerService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
