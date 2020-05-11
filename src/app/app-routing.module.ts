import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DiagnosticCenterComponent} from './pages/diagnostic-center/diagnostic-center.component';
import {HomeComponent} from './pages/home/home.component';
import { ViewtestComponent } from './pages/test/viewtest/viewtest.component';
import { AddtestComponent } from './pages/test/addtest/addtest.component';
import { InsertTestComponent } from './pages/test/insert-test/insert-test.component';
import { RemoveTestComponent } from './pages/test/remove-test/remove-test.component';




const routes: Routes = [
  {
    path: '',
    component: HomeComponent
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


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
