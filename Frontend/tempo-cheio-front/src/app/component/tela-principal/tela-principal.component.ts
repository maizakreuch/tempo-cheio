import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-principal',
  templateUrl: './tela-principal.component.html',
  styleUrls: ['./tela-principal.component.scss']
})
export class TelaPrincipalComponent {
  constructor(private router: Router) {}

  navigateToAdicionarTarefa() {
    this.router.navigate(['/adicionar-tarefa']);
  }

  // Se você precisar de uma função específica para lidar com a seleção:
  onSelect(type: string) {
    console.log(`Selecionado: ${type}`);
    // Você pode adicionar lógica aqui para lidar com a seleção se necessário
    this.navigateToAdicionarTarefa(); // Navega para a página de adicionar tarefa
  }
}
