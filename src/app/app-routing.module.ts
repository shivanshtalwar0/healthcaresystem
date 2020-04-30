import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DiagnosticCenterComponent} from './pages/diagnostic-center/diagnostic-center.component';
import {HomeComponent} from './pages/home/home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
