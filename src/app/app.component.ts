import { Component } from '@angular/core';
import { SuperHeroService } from './superHero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  heroName = '';
  listHeros: string[];
  loading = false;

  constructor (private _superHeroService: SuperHeroService) {}

  lookforHero () {
    this.loading = true;
    this._superHeroService.getHeroes(this.heroName)
    .subscribe(
      data => { 
        this.listHeros = data; 
        this.loading = false;
      },
      error => { 
        console.error (error);
        this.loading = false;
      }
    );
  }
}
