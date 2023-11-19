import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  searchText: string = '';

  constructor(
    private _router: Router,
  ) { }

  onSearch() {
    this._router.navigate(['/busqueda', this.searchText]);
    this.searchText = '';
  }

}
