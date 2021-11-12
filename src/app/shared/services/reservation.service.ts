import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {


  constructor(private http: HttpClient) { }
  getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${environment.apiUrl}/reservations`);
  }

  getReservationId(id: number): Observable<Reservation> {
    return this.http.get<Reservation>(`${environment.apiUrl}/reservations/${id}`);
  }
}
