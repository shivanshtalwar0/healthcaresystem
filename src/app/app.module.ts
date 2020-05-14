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
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './pages/home/home.component';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {HttpClientModule} from '@angular/common/http';
import { AppointmentComponent } from './pages/appointment/appointment.component';
import { MakeAppointmentComponent } from './pages/appointment/make-appointment/make-appointment.component';
import { ViewAppointmentComponent } from './pages/appointment/view-appointment/view-appointment.component';
import { MaterialModule } from './material/material.module';
// import { AppointmentmessageComponent } from './pages/appointmentmessage/appointmentmessage.component';
import { AppointmentMessageComponent } from './pages/appointment/appointment-message/appointment-message.component';
import { AppointmenthandlerService } from './services/appointmenthandler.service';
import { CancelAppointmentComponent } from './pages/appointment/cancel-appointment/cancel-appointment.component';
import { UserHomeComponent } from './pages/user-home/user-home.component';
import { LoginComponent } from './pages/login/login.component';
<<<<<<< HEAD
import { SuccessfulMessageComponent } from './pages/appointment/successful-message/successful-message.component';
=======
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './pages/register/register.component';
>>>>>>> 39c593c94da966186756d3ec7734fe4339e2ccd6
// import { UserHomeComponent } from './user-home/user-home.component';
// import { CancelAppointmentComponent } from './cancel-appointment/cancel-appointment.component';


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
    CancelAppointmentComponent,
    UserHomeComponent,
    LoginComponent,
<<<<<<< HEAD
    SuccessfulMessageComponent
=======
    RegisterComponent
>>>>>>> 39c593c94da966186756d3ec7734fe4339e2ccd6
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
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  providers: [AppointmenthandlerService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
