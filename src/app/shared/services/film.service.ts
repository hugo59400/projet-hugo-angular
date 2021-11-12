import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Film } from '../models/film';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http: HttpClient) { }
  getFilms(): Observable<Film[]> {
    return this.http.get<Film[]>(`${environment.apiUrl}/films`);
  }

  getFilmId(id: number): Observable<Film> {
    return this.http.get<Film>(`${environment.apiUrl}/films/${id}`);
  }

}
