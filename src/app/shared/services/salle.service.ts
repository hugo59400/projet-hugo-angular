import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Salle } from '../models/salle';

@Injectable({
  providedIn: 'root'
})
export class SalleService {



  constructor(private http: HttpClient) { }
  getSalles(): Observable<Salle[]> {
    return this.http.get<Salle[]>(`${environment.apiUrl}/salles`);
  }

  getFilmId(id: number): Observable<Salle> {
    return this.http.get<Salle>(`${environment.apiUrl}/salles/${id}`);
  }


  deleteSalle(salle: Salle): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/salles/${salle.id}`)
  }

  deleteSalleById(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/salles/${id}`)
  }


}
