import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../../interfaces/Tarefa';
import { TarefaService } from '../../servicos/tarefa.service';

@Component({
  selector: 'app-usuario-fav',
  templateUrl: './usuario-fav.component.html',
  styleUrls: ['./usuario-fav.component.scss']
})
export class UsuarioFavComponent implements OnInit {
  listaTarefas: Tarefa[] = [];
  listaTarefasFiltro: Tarefa[] = [];
  tipo: string = 'todos';

  constructor(private tarefaService: TarefaService) {}

  ngOnInit(): void {
    this.carregarTarefas();
  }

  carregarTarefas() {
    this.tarefaService.getTarefas().subscribe(tarefas => {
      this.listaTarefas = tarefas; // Carregue todas as tarefas
      this.filtrarFavoritas(); // Filtra as tarefas favoritas
    });
  }

  filtrarFavoritas() {
    // Filtra apenas as tarefas que são favoritas
    this.listaTarefasFiltro = this.listaTarefas.filter(tarefa => tarefa.favorito === true);
  }

  filtrarAgua() {
    // Filtra as tarefas favoritas do tipo 'agua'
    this.filtrarFavoritas(); // Refiltra as favoritas antes de aplicar o filtro de água
    this.listaTarefasFiltro = this.listaTarefasFiltro.filter(tarefa => tarefa.tipoTarefa === 'agua');
    this.tipo = 'agua';
  }

  filtrarReceitas() {
    // Filtra as tarefas favoritas do tipo 'receitas'
    this.filtrarFavoritas(); // Refiltra as favoritas antes de aplicar o filtro de receitas
    this.listaTarefasFiltro = this.listaTarefasFiltro.filter(tarefa => tarefa.tipoTarefa === 'receitas');
    this.tipo = 'receitas';
  }

  filtrarTodos() {
    this.filtrarFavoritas(); // Apenas filtra para mostrar as favoritas
    this.tipo = 'todos';
  }
}
