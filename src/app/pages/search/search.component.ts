import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../services/recipe.service';
import { environment } from 'src/environments/environment';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  recipeList: any = [];
  searchParamSubscription: Subscription | undefined;
  showResults: boolean = true;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _service: RecipeService
  ) { }

  ngOnInit(){
    this.searchParamSubscription = this._route.params.subscribe(params => {
      this.searchRecipes(params['string']);
    });
  }

  searchRecipes(searchString: string){
    this.recipeList = [];
    this._service.getRecipiesBySearch(searchString).subscribe((response) => {
      if(response.code == 200){
        this.recipeList = response.recetas;
        this.recipeList.forEach((element: any[]) => {
          element[3] = `${environment.s3_bucketURL}${element[3]}`
        });
        this.recipeList.length > 0 ? this.showResults = true : this.showResults = false;
        console.log(this.recipeList);
      } else {
        console.log("Error al recuperar las recetas");
        this._router.navigate(['/']);
      }
    });
  }

  btnReturnHome(){
    this._router.navigate(['/']);
  };

  btnDetail(id: any){
    this._router.navigate(['/detalle', id]);
  }

}
