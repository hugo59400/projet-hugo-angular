import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Film } from 'src/app/shared/models/film';
import { FilmService } from 'src/app/shared/services/film.service';

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.css']
})
export class FilmCardComponent implements OnInit {
  @Input() film!: Film;

  @Output() deleteEmitter: EventEmitter<string> = new EventEmitter<string>();
  constructor(private filmService: FilmService,  private router: Router) { }

  ngOnInit(): void {
  }

}
