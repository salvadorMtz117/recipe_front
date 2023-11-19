import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { NgbCarousel, NgbCarouselModule, NgbRating } from '@ng-bootstrap/ng-bootstrap';
import { PagesComponent } from './pages.component';
import { LoginComponent } from './login/login.component';
import { CategoriesComponent } from './categories/categories.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    PagesComponent,
    LayoutComponent,
    LoginComponent,
    CategoriesComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    NgbCarousel,
    NgbCarouselModule,
    NgbRating
  ]
})
export class PagesModule { }
