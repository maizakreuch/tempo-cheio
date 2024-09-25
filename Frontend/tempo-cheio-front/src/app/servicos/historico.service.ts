import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Historico } from '../interfaces/Historico';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoricoService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:8080/historico';

  findAll(): Observable<Historico[]> {
    return this.http.get<Historico[]>(this.apiUrl);
  }

  findById(id: number): Observable<Historico> {
    return this.http.get<Historico>(`${this.apiUrl}/${id}`);
  }

  add(historico: Historico): Observable<Historico> {
    return this.http.post<Historico>(this.apiUrl, historico);
  }

  update(historico: Historico): Observable<Historico> {
    return this.http.put<Historico>(`${this.apiUrl}/${historico.id}`, historico);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
