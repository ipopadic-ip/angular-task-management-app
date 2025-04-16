import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Zadatak } from '../model/zadatak.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ZadatakService {
  private apiUrl = 'http://localhost:3000/zadatak';

  constructor(private http: HttpClient) {}

  getZadaci(): Observable<Zadatak[]> {
    return this.http.get<Zadatak[]>(this.apiUrl);
  }

  getZadatakById(id: number): Observable<Zadatak> {
    return this.http.get<Zadatak>(`${this.apiUrl}/${id}`);
  }

  addZadatak(zadatak: Zadatak): Observable<Zadatak> {
    return this.http.post<Zadatak>(this.apiUrl, zadatak);
  }

  updateZadatak(zadatak: Zadatak): Observable<Zadatak> {
    return this.http.put<Zadatak>(`${this.apiUrl}/${zadatak.id}`, zadatak);
  }

  deleteZadatak(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getNextId(): Observable<number> {
    return this.getZadaci().pipe(
      map(zadaci => (zadaci.length === 0 ? 1 : Math.max(...zadaci.map(z => z.id)) + 1))
    );
  }
}
