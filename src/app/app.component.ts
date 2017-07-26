import { Component } from '@angular/core';
import { SuperHeroService } from './superHero.service';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  heroName = '';
  listHeros: Observable <string[]>;
  loading = false;

  constructor (private _superHeroService: SuperHeroService) {}

  lookforHero () {
    this.listHeros = this._superHeroService.getHeroes(this.heroName);
  }
}
