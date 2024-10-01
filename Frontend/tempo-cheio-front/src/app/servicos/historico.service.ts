import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Historico } from '../interfaces/Historico';

@Injectable({
  providedIn: 'root'
})
export class HistoricoService {
  private apiUrl = 'http://localhost:8080/historicos'; // Ajuste a URL conforme necessário

  constructor(private http: HttpClient) {}

  // Método para obter todos os históricos
  findAll(): Observable<Historico[]> {
    return this.http.get<Historico[]>(this.apiUrl);
  }

  // Método para criar um novo histórico
  createHistorico(historico: Historico): Observable<Historico> {
    return this.http.post<Historico>(this.apiUrl, historico);
  }

  // Método para atualizar um histórico existente
  updateHistorico(id: number, historico: Historico): Observable<Historico> {
    return this.http.put<Historico>(`${this.apiUrl}/${id}`, historico);
  }

  // Método para deletar um histórico
  deleteHistorico(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
