import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NewDiagnosticCenterComponent} from './pages/new-diagnostic-center/new-diagnostic-center.component';


const routes: Routes = [
  {
    path: 'diagnosticCenter',
    children: [
      {component: NewDiagnosticCenterComponent, path: 'new'}
    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
