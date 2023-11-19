import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'
import { PagesComponent } from './pages.component'
import { CategoriesComponent } from './categories/categories.component'
import { DetailComponent } from './detail/detail.component'

const routes: Routes = [
    { path: 'inicio',component: PagesComponent},
    { path: 'categorias/:id',component: CategoriesComponent},
    { path: 'detalle/:id', component: DetailComponent },
    { path: "**", redirectTo: "inicio" }
]

@NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [ RouterModule ]
  })
  export class PagesRoutingModule { }
