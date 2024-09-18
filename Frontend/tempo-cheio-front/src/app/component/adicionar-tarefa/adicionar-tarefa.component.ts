import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adicionar-tarefa',
  templateUrl: './adicionar-tarefa.component.html',
  styleUrls: ['./adicionar-tarefa.component.scss']
})
export class AdicionarTarefaComponent {
  selectedType: string = 'agua'; // ou 'receitas', baseado na seleção

  constructor(private router: Router) {}

  onSelect(option: string): void {
    console.log(`Selecionado: ${option}`);
  }

  onAdicionar(): void {
    console.log('Tarefa adicionada!');
  }
}
