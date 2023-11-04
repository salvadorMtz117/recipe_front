import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { NgbCarousel, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { PagesComponent } from './pages.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    PagesComponent,
    LayoutComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    NgbCarousel,
    NgbCarouselModule
  ]
})
export class PagesModule { }
