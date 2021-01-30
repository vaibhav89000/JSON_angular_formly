import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {FormlyJsonComponent} from '../app/formly-json/formly-json.component';
import { FormlyComponent } from './formly/formly.component';
const routes: Routes = [

  {
    path: "formly",
    component: FormlyComponent
  },
  {
    path: "json-formly",
    component: FormlyJsonComponent
  },
  {
    path: "**",
    redirectTo: "formly"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
