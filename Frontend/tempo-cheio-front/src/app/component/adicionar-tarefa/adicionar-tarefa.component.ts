import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-adicionar-tarefa',
  templateUrl: './adicionar-tarefa.component.html',
  styleUrls: ['./adicionar-tarefa.component.scss']
})
export class AdicionarTarefaComponent {
  
  @Input()
  selectedType: string | null = ''; // ou 'receitas', baseado na seleção

  constructor (
    
    private route: ActivatedRoute,
    private router: Router
  ) {}

  onSelect(option: string): void {
    console.log(`Selecionado: ${option}`);
  }

  onAdicionar(): void {
    console.log('Tarefa adicionada!');
    this.router.navigate(['/editar-tarefa']);

  }

  ngOnInit(): void {
    const tipo: string | null = this.route.snapshot.paramMap.get('tipo');
    this.selectedType = tipo;
    
  }

}
