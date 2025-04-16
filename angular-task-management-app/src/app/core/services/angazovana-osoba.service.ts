import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AngazovanaOsoba } from '../model/angazovana-osoba.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AngazovanaOsobaService {
  private apiUrl = 'http://localhost:3000/angazovanaOsoba';

  constructor(private http: HttpClient) {}

  getAngazovaneOsobe(): Observable<AngazovanaOsoba[]> {
    return this.http.get<AngazovanaOsoba[]>(this.apiUrl);
  }

  getAngazovanaOsobaById(id: number): Observable<AngazovanaOsoba> {
    return this.http.get<AngazovanaOsoba>(`${this.apiUrl}/${id}`);
  }

  addAngazovanaOsoba(angazovanaOsoba: AngazovanaOsoba): Observable<AngazovanaOsoba> {
    return this.http.post<AngazovanaOsoba>(this.apiUrl, angazovanaOsoba);
  }

  updateAngazovanaOsoba(angazovanaOsoba: AngazovanaOsoba): Observable<AngazovanaOsoba> {
    return this.http.put<AngazovanaOsoba>(`${this.apiUrl}/${angazovanaOsoba.id}`, angazovanaOsoba);
  }

  deleteAngazovanaOsoba(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}