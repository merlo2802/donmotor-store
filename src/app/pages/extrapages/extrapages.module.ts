import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbCarouselModule, NgbAccordionModule, NgbTooltipModule, NgbCollapseModule, NgbNavModule} from '@ng-bootstrap/ng-bootstrap';

// Swiper Slider
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';

// Google Map
import { AgmCoreModule } from '@agm/core';

// Youtube Player
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';

// Search Filter
import { Ng2SearchPipeModule } from 'ng2-search-filter';

// Component
import { ExtraPagesRoutingModule } from "./extrapages-routing.module";
import { SharedModule } from "../../shared/shared.module";
import { AboutComponent } from './about/about.component';
import { BlogGridComponent } from './blog-grid/blog-grid.component';
import { SingleBlogComponent } from './single-blog/single-blog.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HelpCenterComponent } from './help-center/help-center.component';

import { SortByExtraPagesPipe } from "../extrapages/sort-by.pipe";

@NgModule({
  declarations: [
    AboutComponent,
    BlogGridComponent,
    SingleBlogComponent,
    ContactsComponent,
    HelpCenterComponent,
    SortByExtraPagesPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbCarouselModule,
    NgbAccordionModule,
    NgbTooltipModule,
    NgbCollapseModule,
    NgbNavModule,
    ExtraPagesRoutingModule,
    SharedModule,
    NgxUsefulSwiperModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE'
    }),
    NgxYoutubePlayerModule,
    Ng2SearchPipeModule
  ]
})
export class ExtrapagesModule { }
