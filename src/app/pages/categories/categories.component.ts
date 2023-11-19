import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../services/recipe.service';
import { environment } from'../../../environments/environment'

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{

  recipeList: any = [];
  categoryDetail: any = {};

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _service: RecipeService
  ) { }

  ngOnInit() {
    this.getCatoryDetail(this._route.snapshot.params['id']);
    this.getRecipes(this._route.snapshot.params['id']);
  }

  getRecipes(id: any){
    this._service.getRecipiesByCategory(id).subscribe((response) => {
      if(response.code == 200){
        this.recipeList = response.recetas;
        this.recipeList.forEach((element: any[]) => {
          element[3] = `${environment.s3_bucketURL}${element[3]}`
        });
        console.log(this.recipeList);
      } else {
        console.log("Error al recuperar las recetas");
        this._router.navigate(['/']);
      }
    });
  }

  getCatoryDetail(id: any){
    this._service.getCategoryDetail(id).subscribe((response) => {
      if(response.code == 200){
        console.log(response);
        this.categoryDetail = response.categoria;
      } else {
        console.log("Error al recuperar el detalle de la categoría");
        this._router.navigate(['/']);
      }
    });
  };

  btnReturnHome(){
    this._router.navigate(['/']);
  };

  btnDetail(id: any){
    this._router.navigate(['/detalle', id]);
  }
}
