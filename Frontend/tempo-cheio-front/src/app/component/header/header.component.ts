import { Component } from '@angular/core';
import { TarefaService } from '../../servicos/tarefa.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  quantFavoritos: number = 0;

  constructor(
    private tarefaService: TarefaService
  ) {}

  ngOnInit(){
    this.tarefaService.findAll().subscribe(tarefas => {
      let favoritos: number = 0;

      tarefas.forEach(tarefa => {
        if (tarefa.favorito) {
          favoritos++;
        }
      });

      this.quantFavoritos = favoritos;
    });
  }

}
