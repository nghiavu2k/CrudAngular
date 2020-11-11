import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;
  selectedHero: Hero;
  idH: number = HEROES.length;
  nameH: string;

  constructor() {}

  ngOnInit() {}

  edit(hero: Hero): void {
    this.selectedHero = hero;
  }

  onClick() {
    HEROES.push({
      id: this.idH += 1,
      name: this.nameH,
    });
  }

  delete1(id: number) {
    for (let i = 0; i < this.heroes.length; i++) {
      if (this.heroes[i].id == id) {
        this.heroes.splice(i, 1);
      }
    }
  }
}
