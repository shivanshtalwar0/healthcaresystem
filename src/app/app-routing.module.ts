import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
<<<<<<< HEAD
import { ViewtestComponent } from './pages/test/viewtest/viewtest.component';
import { AddtestComponent } from './pages/test/addtest/addtest.component';
import { InsertTestComponent } from './pages/test/insert-test/insert-test.component';
import { RemoveTestComponent } from './pages/test/remove-test/remove-test.component';


=======
import {AppointmentComponent} from './pages/appointment/appointment.component';
import {MakeAppointmentComponent} from './pages/appointment/make-appointment/make-appointment.component';
import {ViewAppointmentComponent} from './pages/appointment/view-appointment/view-appointment.component';
import { UserHomeComponent } from './pages/user-home/user-home.component';
>>>>>>> fa1e61afeab5eb5c6455db0e4a11a9715c141697


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
<<<<<<< HEAD
  },
  {
    path: 'add' ,
    component : AddtestComponent
  },
  {
    path : 'view/:centerName' ,
    component: ViewtestComponent
  },

{
  path: 'insert' ,
  component: InsertTestComponent
},
{
  path: 'remove',
  component: RemoveTestComponent

},
=======
  },  {path:'users',component:UserHomeComponent},
  { path:'users/dashboard', component: AppointmentComponent, children: [
      {path: 'makeappointment', component: MakeAppointmentComponent},
      {path: 'viewappointment', component: ViewAppointmentComponent},
    ]
  }
>>>>>>> fa1e61afeab5eb5c6455db0e4a11a9715c141697


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
