import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Tarefa } from '../../interfaces/Tarefa';
import { TarefaService } from '../../servicos/tarefa.service';


@Component({
  selector: 'app-editar-tarefa',
  templateUrl: './editar-tarefa.component.html',
  styleUrls: ['./editar-tarefa.component.scss']
})
export class EditarTarefaComponent {

  cadastroForm!: FormGroup;
  
  // Inicializando a tarefa com os valores corretos
  usuario: Tarefa = {
    id: 0,
    titulo: '',
    valorTempo: 0,
    medidaUnidade: '',
    quantidade: 0,
    favorito: false, // Definindo o valor booleano como false ou true
    quantity: 0
  };

  // Valor inicial da quantidade
  quantity: number = 20;

  // Métodos para incrementar e decrementar
  increment(): void {
    if (this.quantity < 100) {
      this.quantity++;
    }
  }

  decrement(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
}
