import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-avaliar-tarefa',
  templateUrl: './avaliar-tarefa.component.html',
  styleUrls: ['./avaliar-tarefa.component.scss']
})
export class AvaliarTarefaComponent {
  estrelas = new Array(5).fill(0);
  rating: number = 0;

  constructor(private router: Router) {}

  avaliar(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const starIndex = Number(target.id);
    this.rating = starIndex + 1;
  }

  // Função para redirecionar para a tela principal
  avaliarTarefa() {
    this.router.navigate(['/tela-principal']);
  }
  voltarTarefa(){
    this.router.navigate(['/tela-principal'])
  }
}
