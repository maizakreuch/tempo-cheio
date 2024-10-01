import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../../servicos/tarefa.service'; // Importe o serviço de Tarefa
import { Tarefa } from '../../interfaces/Tarefa'; // Importe a interface de Tarefa

@Component({
  selector: 'app-usuario-historico',
  templateUrl: './usuario-historico.component.html',
  styleUrls: ['./usuario-historico.component.scss']
})
export class UsuarioHistoricoComponent implements OnInit {
  listaTarefas: Tarefa[] = [];
  listaTarefasFiltro: Tarefa[] = [];
  tipo: string = 'todos';

  constructor(
    private tarefaService: TarefaService
  ) {}

  ngOnInit(): void {
    this.carregarTarefas();
  }
  
  carregarTarefas() {
    this.tarefaService.findAll().subscribe(tarefas => {
      this.listaTarefas = tarefas;
      this.listaTarefasFiltro = tarefas;


      // ADICIONAR ESSE TRECHO NO FAVORITOS
      // this.listaTarefasFiltro = tarefas.filter(tarefa => {
      //   return tarefa.favorito == true;
      // });
    });
  }

  filtrarAgua(){
    this.listaTarefasFiltro = this.listaTarefas.filter(tarefa => {
      return tarefa.tipoTarefa == 'agua';
    });
    this.tipo = 'agua';
  }

  filtrarReceitas(){
    this.listaTarefasFiltro = this.listaTarefas.filter(tarefa => {
      return tarefa.tipoTarefa == 'receitas';
    });
    this.tipo = 'receitas';
  }

  filtrarTodos(){
    this.listaTarefasFiltro = this.listaTarefas;
    this.tipo = 'todos';
  }
  
}
