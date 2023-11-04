import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'
import { PagesComponent } from './pages.component'
import { CategoriesComponent } from './categories/categories.component'

const routes: Routes = [
    { path: 'inicio',component: PagesComponent},
    { path: 'categorias',component: CategoriesComponent},
    { path: "**", redirectTo: "inicio" }
]

@NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [ RouterModule ]
  })
  export class PagesRoutingModule { }
