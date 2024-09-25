import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TipoTarefa } from '../interfaces/TipoTarefa';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoTarefaService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:8080/tipoTarefa';

  findAll(): Observable<TipoTarefa[]> {
    return this.http.get<TipoTarefa[]>(this.apiUrl);
  }

  findById(id: number): Observable<TipoTarefa> {
    return this.http.get<TipoTarefa>(`${this.apiUrl}/${id}`);
  }

  add(tipoTarefa: TipoTarefa): Observable<TipoTarefa> {
    return this.http.post<TipoTarefa>(this.apiUrl, tipoTarefa);
  }

  update(tipoTarefa: TipoTarefa): Observable<TipoTarefa> {
    return this.http.put<TipoTarefa>(`${this.apiUrl}/${tipoTarefa.id}`, tipoTarefa);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
