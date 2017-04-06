import { NgModule } from '@angular/core';
import { AboutComponent } from './about.component';
import { AboutRouting } from './about.routing.module';

@NgModule({
    imports: [AboutRouting],
    declarations: [AboutComponent],
    exports: [AboutComponent]
})

export class AboutModule { }