import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tarefa } from '../interfaces/Tarefa';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  private baseUrl = 'http://localhost:8080/tarefa'; // Altere para a URL correta

  constructor(private http: HttpClient) {}

  getTarefaById(id: number): Observable<Tarefa> {
    return this.http.get<Tarefa>(`${this.baseUrl}/${id}`);
  }

  findById(id: number): Observable<Tarefa> {
    return this.http.get<Tarefa>(`${this.baseUrl}/${id}`);
  }

  findAll(): Observable<Tarefa[]> {
    return this.http.get<Tarefa[]>(this.baseUrl);
  }

  add(tarefa: Tarefa): Observable<Tarefa> {
    return this.http.post<Tarefa>(`${this.baseUrl}`, tarefa);
  }
}
