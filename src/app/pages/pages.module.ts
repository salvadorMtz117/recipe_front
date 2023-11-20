import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { NgbCarousel, NgbCarouselModule, NgbRating } from '@ng-bootstrap/ng-bootstrap';
import { PagesComponent } from './pages.component';
import { LoginComponent } from './login/login.component';
import { CategoriesComponent } from './categories/categories.component';
import { DetailComponent } from './detail/detail.component';
import { SearchComponent } from './search/search.component';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { FavsComponent } from './favs/favs.component';

@NgModule({
  declarations: [
    PagesComponent,
    LayoutComponent,
    LoginComponent,
    CategoriesComponent,
    DetailComponent,
    SearchComponent,
    FavsComponent
  ],
  imports: [
    CommonModule,
    NgbCarousel,
    NgbCarouselModule,
    NgbRating,
    ToastrModule.forRoot(),
    FormsModule
  ]
})
export class PagesModule { }
