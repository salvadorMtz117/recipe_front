import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../services/recipe.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  recipeDetail: any = {};
  recipeSteps: any = [];
  recipeIngredients: any = [];
  recipeComments: any = [];
  recipeList: any = [];
  categoryDetail: any = {};
  generatePdf: boolean = false;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _service: RecipeService
  ) { }

  ngOnInit() {
    this.getDetailRecipe(this._route.snapshot.params['id']);
  }

  getDetailRecipe(id: any){
    this._service.getRecipeDetail(id).subscribe((response) => {
      if(response.code == 200){
        console.log(response);
        this.recipeDetail = response.receta.detail;
        this.recipeDetail.key_img = `${environment.s3_bucketURL}${this.recipeDetail.key_img}`;
        this.recipeSteps = response.receta.steps;
        this.recipeIngredients = response.receta.ingredients;
        this.recipeComments = response.receta.comments;
        this.getRecipes(this.recipeDetail.type);
        this.getCatoryDetail(this.recipeDetail.type);
      } else {
        console.log("Error al recuperar el detalle de la receta");
        this._router.navigate(['/']);
      }
    });
  }

  ariaValueText(current: number, max: number) {
		return `${current} out of ${max} hearts`;
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

  getRecipePdf(id: any){
    this.generatePdf = true;
    this._service.getRecipePDF(id).subscribe((response) => {
      console.log(response);
      if(response.code == 200){
        if (/^[a-zA-Z0-9+/]*={0,2}$/.test(response.pdf)) {
          const pdfData = atob(response.pdf);
          const pdfBlob = new Blob([pdfData], {type: 'application/pdf'});
          const downloadURL = window.URL.createObjectURL(pdfBlob);
          const link = document.createElement('a');
          link.href = downloadURL;
          link.download = `${this.recipeDetail.name}.pdf`;
          link.click();
        } else {
          console.log("La cadena no está correctamente codificada en base64");
        }
      } else {
        console.log("Error al recuperar el detalle de la categoría");
        //this._router.navigate(['/']);
      }
      this.generatePdf = false;
    });
  };

  btnDetail(id: any){
    this._router.navigate(['/detalle', id]);
  };

}
