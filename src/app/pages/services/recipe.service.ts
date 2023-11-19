import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from'../../../environments/environment'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })

export class RecipeService {

  constructor(private http: HttpClient) { }

  /**
   * Función para obtener las recetas por categoría
   * @param id Id de categoría
   * @returns Listado de recetas
   */
  getRecipiesByCategory(id: any): Observable<any> {
    return this.http.get(`${environment.url_api}recipe/RecipeByCategory?id=${id}`,httpOptions);
  };

  /**
   * Función para obtener el detalle de una categoria
   * @param id Id de receta
   * @returns Detalle de receta
   */
  getCategoryDetail(id: any): Observable<any> {
    return this.http.get(`${environment.url_api}utils/GetCategoryDetail?id=${id}`,httpOptions);
  };

  /**
   * Función para obtener el detalle de una receta
   * @param id Id de receta
   * @returns Detalle de receta
   */
  getRecipeDetail(id: any): Observable<any> {
    return this.http.get(`${environment.url_api}recipe/GetRecipe?id=${id}`,httpOptions);
  };

  getRecipePDF(id: any): Observable<any> {
    return this.http.get(`${environment.url_api}recipe/GeneratePDFRecipe?id=${id}`,httpOptions);
  };
}
