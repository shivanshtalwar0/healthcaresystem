import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {AppointmentComponent} from './pages/appointment/appointment.component';
import {MakeAppointmentComponent} from './pages/appointment/make-appointment/make-appointment.component';
import {ViewAppointmentComponent} from './pages/appointment/view-appointment/view-appointment.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, {
    path: 'users/dashboard', component: AppointmentComponent, children: [
      {path: '', redirectTo: '/makeappointment', pathMatch: 'full'},
      {path: 'makeappointment', component: MakeAppointmentComponent},
      {path: 'viewappointment', component: ViewAppointmentComponent},
    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
