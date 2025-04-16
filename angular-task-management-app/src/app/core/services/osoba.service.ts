import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Osoba } from '../model/osoba.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class OsobaService {
  private apiUrl = 'http://localhost:3000/osoba';

  constructor(private http: HttpClient) {}

  getOsobe(): Observable<Osoba[]> {
    return this.http.get<Osoba[]>(this.apiUrl);
  }

  getOsobaById(id: number): Observable<Osoba> {
    return this.http.get<Osoba>(`${this.apiUrl}/${id}`);
  }

  addOsoba(osoba: Osoba): Observable<Osoba> {
    return this.http.post<Osoba>(this.apiUrl, osoba);
  }

  updateOsoba(osoba: Osoba): Observable<Osoba> {
    return this.http.put<Osoba>(`${this.apiUrl}/${osoba.id}`, osoba);
  }

  deleteOsoba(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getNextId(): Observable<number> {
    return this.getOsobe().pipe(
      map(osobe => (osobe.length === 0 ? 1 : Math.max(...osobe.map(o => o.id)) + 1))
    );
  }
}