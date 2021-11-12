import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Film } from '../shared/models/film';
import { FilmService } from '../shared/services/film.service';

@Component({
  selector: 'app-film-page',
  templateUrl: './film-page.component.html',
  styleUrls: ['./film-page.component.css']
})
export class FilmPageComponent implements OnInit {
films:Film[]=[]

id?: number = undefined;
  constructor(private route: ActivatedRoute, private userService: FilmService) { }

  ngOnInit(): void {
    // récupérer l'id depuis l'url
    this.id = this.route.snapshot.params['id'];

    // récupération en asynchrone des params de l'url
    this.route.params.subscribe((params) => {
      console.log(params);
    })
    // appel du service
    this.refreshFilms();
  }
  refreshFilms(): Subscription {
    return this.userService.getFilms()
      // souscription aux changements de l'observable
      .subscribe(
        // dés qu'il y a une reponse
        (films: Film[]) => {
          // j'assigne les utilisateurs récupére au tableau du composant
          this.films = films;
        }
      );
  }


  }


