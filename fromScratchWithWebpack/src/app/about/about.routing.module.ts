import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about.component';


@NgModule({
  imports: [
    RouterModule.forChild([
        {path: 'about', component: AboutComponent}
    ])
    // other imports here
  ],
  exports: [RouterModule]
})

export class AboutRouting { }