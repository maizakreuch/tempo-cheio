import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Tarefa } from '../../interfaces/Tarefa';
import { TarefaService } from '../../servicos/tarefa.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-tarefa',
  templateUrl: './editar-tarefa.component.html',
  styleUrls: ['./editar-tarefa.component.scss']
})
export class EditarTarefaComponent implements OnInit {
  cadastroForm!: FormGroup;
  medidaUnidade: string = '';
  tarefa: Tarefa = {
    id: 0,
    titulo: '',
    valorHora: 0,
    valorMinuto: 0,
    valorSegundo: 0,
    medidaUnidade: '',
    quantidade: 0,
    favorito: false,
    tipoTarefa: '',
    tipo: '',  
    fonte: '',
    fonteDescricao: ''
  };

  tipo!: string;
  isFavorito: boolean = false;

  constructor(
    private router: Router,
    private tarefaService: TarefaService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.tipo = params.get('tipo') || '';
      this.inicializarTarefa();
      this.tarefa.tipoTarefa = this.tipo;

      this.validarMedidaUnidade();
      this.validarFonte();

      const id: number = Number(params.get('id'));
      if (id && id != 0) {
        this.tarefaService.findById(id).subscribe(tarefa => {
          this.tarefa = tarefa;
          this.tipo = tarefa.tipoTarefa;
          this.isFavorito = tarefa.favorito;
          this.validarMedidaUnidade();
        });
      }

    });
  }

  validarMedidaUnidade() {
    if (this.tipo === 'agua') {
      this.medidaUnidade = 'ML';
    } else if (this.tipo === 'receitas') {
      this.medidaUnidade = 'G';
    }
  }

  inicializarTarefa(): void {
    if (this.tipo === 'agua') {
      this.tarefa.fonteDescricao = 'Filtro de Água';
    } else if (this.tipo === 'receitas') {
      this.tarefa.fonteDescricao = 'Aparelho da Receita';
    }
  }

  salvar() {
    this.tarefa.medidaUnidade = this.medidaUnidade;
    console.log('Tarefa a ser salva:', this.tarefa);

    this.tarefaService.add(this.tarefa).subscribe({
        next: (novaTarefa) => {
            console.log('Nova Tarefa ID:', novaTarefa.id);
            this.router.navigate(['/cronometro-tarefa', novaTarefa.id]);
        },
        error: (error) => {
            console.error('Erro ao salvar a tarefa:', error);
        }
    });
}


switchFavorito() {
    this.tarefa.favorito = !this.tarefa.favorito
    this.isFavorito = this.tarefa.favorito;
  }

  trocarMedida(medida: string) {
    this.medidaUnidade = medida;
  }

  onFonteChange(event: any) {
    this.tarefa.fonte = event.target.value;
  }

  validarFonte() {
    if (this.tipo === 'agua') {
      this.tarefa.fonte = 'Filtro';
    } else if (this.tipo === 'receitas') {
      this.tarefa.fonte = 'Fogão';
    }
  }
}
