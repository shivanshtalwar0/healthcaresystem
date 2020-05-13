import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {AppointmentComponent} from './pages/appointment/appointment.component';
import {MakeAppointmentComponent} from './pages/appointment/make-appointment/make-appointment.component';
import {ViewAppointmentComponent} from './pages/appointment/view-appointment/view-appointment.component';
import { UserHomeComponent } from './pages/user-home/user-home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthGuard } from './guards/auth.guard';
import { DiagnosticCenterComponent } from './pages/diagnostic-center/diagnostic-center.component';
import { AddDiagnosticCenterComponent } from './pages/diagnostic-center/add-diagnostic-center/add-diagnostic-center.component';
import { ViewDiagnosticCenterComponent } from './pages/diagnostic-center/view-diagnostic-center/view-diagnostic-center.component';


const routes: Routes = [
  {
    path: '',
    component: UserHomeComponent
  },  
  {path:'users',component:UserHomeComponent},
  { path:'users/dashboard', canActivate:[AuthGuard],canActivateChild:[AuthGuard], 
      component: AppointmentComponent, children: [
      {path: 'makeappointment', component: MakeAppointmentComponent},
      {path: 'viewappointment', component: ViewAppointmentComponent},
    ]
  },
  {
    path:'users',children:[
      { path:'login',component:LoginComponent },  
      { path:'register',component:RegisterComponent  }
    ]
  },
  {
    path:'admin',children:[
      { path:'',component:DiagnosticCenterComponent},
      { path:'add-diagnostic-center',component:AddDiagnosticCenterComponent },  
      { path:'view-diagnostic-center',component:ViewDiagnosticCenterComponent  }
    ]
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
