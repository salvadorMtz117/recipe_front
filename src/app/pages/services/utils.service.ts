import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from'../../../environments/environment'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })

export class UtilsService {


  constructor(private http: HttpClient) { }

  /**
   * Función para obtener los carruseles
   * @returns Lista de carruseles
   */
  getCarrusel(): Observable<any> {
    return this.http.get(`${environment.url_api}utils/GetCarrusel`,httpOptions);
  }

  getCategories(): Observable<any> {
    return this.http.get(`${environment.url_api}utils/GetCategories`,httpOptions);
  }

  getCTopRecipies(): Observable<any> {
    return this.http.get(`${environment.url_api}utils/TopRecetas`,httpOptions);
  }
}
