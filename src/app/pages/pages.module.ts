import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Page Routing
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from "../shared/shared.module";
import { StoreComponent } from './store/store.component';


@NgModule({
  declarations: [

  
    StoreComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
  ]
})
export class PagesModule { }
