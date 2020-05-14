import {BrowserModule} from '@angular/platform-browser';
import {NgModule, ApplicationModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatNativeDateModule, MatOptionModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {FooterComponent} from './components/footer/footer.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {DiagnosticCenterComponent} from './pages/diagnostic-center/diagnostic-center.component';
import {AddDiagnosticCenterComponent} from './pages/diagnostic-center/add-diagnostic-center/add-diagnostic-center.component';
import {ViewDiagnosticCenterComponent} from './pages/diagnostic-center/view-diagnostic-center/view-diagnostic-center.component';
import {MatDialogModule} from '@angular/material/dialog';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HomeComponent} from './pages/home/home.component';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule, MatCardActions, MatCard} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule, MatLabel, MatFormField, MatError, MatHint, MatFormFieldControl} from '@angular/material/form-field';
import {HttpClientModule} from '@angular/common/http';
import {AppointmentComponent} from './pages/appointment/appointment.component';
import {MakeAppointmentComponent} from './pages/appointment/make-appointment/make-appointment.component';
import {ViewAppointmentComponent} from './pages/appointment/view-appointment/view-appointment.component';
import {MaterialModule} from './material/material.module';
import {MatSelectModule} from '@angular/material/select';
// import { AppointmentmessageComponent } from './pages/appointmentmessage/appointmentmessage.component';
import {AppointmentMessageComponent} from './pages/appointment/appointment-message/appointment-message.component';
import {AppointmenthandlerService} from './services/appointmenthandler.service';
import {CancelAppointmentComponent} from './pages/appointment/cancel-appointment/cancel-appointment.component';
import {UserHomeComponent} from './pages/user-home/user-home.component';
import {LoginComponent} from './pages/login/login.component';
import {CommonModule} from '@angular/common';
import {RegisterComponent} from './pages/register/register.component';
import {TestmanagementComponent} from './pages/testmanagement/testmanagement.component';
import {InputtestComponent} from './pages/testmanagement/newtest/inputtest.component';
import {DeletetestComponent} from './pages/testmanagement/deletetest/deletetest.component';
import {ViewtestComponent} from './pages/testmanagement/viewtest/viewtest.component';
import {UpdatetestComponent} from './pages/testmanagement/viewtest/updatetest/updatetest.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import {httpInterceptorProviders} from './interceptors';

import { MangeTestComponent } from './pages/diagnostic-center/mange-test/mange-test.component';
import { UpdateTestComponent } from './pages/testmanagement/update-test/update-test.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
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
    AppointmentMessageComponent,
    CancelAppointmentComponent,
    TestmanagementComponent,
    InputtestComponent,
    DeletetestComponent,
    UserHomeComponent,
    LoginComponent,
    RegisterComponent,
    ViewtestComponent,
    UpdatetestComponent,
    MangeTestComponent,
    UpdateTestComponent,
    UserDetailComponent
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
    NgbModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    ApplicationModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    FontAwesomeModule
  ],
  providers: [AppointmenthandlerService,httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {
}
