import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-principal',
  templateUrl: './tela-principal.component.html',
  styleUrls: ['./tela-principal.component.scss']
})
export class TelaPrincipalComponent {

  constructor(private router: Router) {}

  // Função para navegar para a tela de editar tarefa
  navigateToEditarTarefa() {
    this.router.navigate(['/editar-tarefa']);
  }

  // Função chamada ao selecionar o tipo de tarefa (água ou receitas)
  onSelect(type: string) {
    console.log(`Selecionado: ${type}`);

    // Navega para a página de editar tarefa
    this.navigateToEditarTarefa();
  }
}
