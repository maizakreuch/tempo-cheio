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
    titulo: '', // Este campo será definido ao inicializar a tarefa
    valorHora: 0,
    valorMinuto: 0,
    valorSegundo: 0,
    medidaUnidade: '',
    quantidade: 0,
    favorito: false,
    tipoTarefa: '',
    fonte: '', // Inicializando com uma opção padrão
    fonteDescricao: '' // Campo para descrever a fonte da tarefa
  };

  tipo!: string; // Usando o operador de declaração não nula

  constructor(
    private router: Router,
    private tarefaService: TarefaService,
    private route: ActivatedRoute // Injeta o ActivatedRoute
  ) {}


  ngOnInit(): void {
    // Captura o parâmetro 'tipo' da rota
    this.route.paramMap.subscribe(params => {
      this.tipo = params.get('tipo') || ''; // Armazena o tipo de tarefa
      this.inicializarTarefa(); // Inicializa a tarefa com base no tipo
      this.tarefa.tipoTarefa = this.tipo;

      if (this.tipo == 'agua') {
        this.medidaUnidade = 'ML'
      }

      if (this.tipo == 'receitas') {
        this.medidaUnidade = 'G'
      }

      this.validarFonte();
    });
  }

  inicializarTarefa(): void {
    if (this.tipo === 'agua') {
      this.tarefa.fonteDescricao = 'Filtro de Água';
      // Configure outras propriedades específicas para água, se necessário
    } else if (this.tipo === 'receitas') {
      this.tarefa.fonteDescricao = 'Filtro de Receitas';
      // Configure outras propriedades específicas para receitas, se necessário
    }
  }

  salvar() {
    this.tarefa.medidaUnidade = this.medidaUnidade;
    this.tarefaService.add(this.tarefa).subscribe(novaTarefa => {
      this.router.navigate(['/cronometro-tarefa', novaTarefa.id]);
    });
  }

  

  marcarComoFavorito() {
    this.tarefa.favorito = true;
    this.tarefaService.addToFavoritos(this.tarefa).subscribe(() => {
      console.log('Tarefa marcada como favorita com sucesso!');
    });
  }

  trocarMedida(medida: string) {
    this.medidaUnidade = medida;
  }

  // Método para lidar com a mudança na seleção do filtro
  onFonteChange(event: any) {
    this.tarefa.fonte = event.target.value; // Atualiza a propriedade fonte com o valor selecionado
  }

  validarFonte() {
    if (this.tipo == 'agua') {
      this.tarefa.fonte = 'Filtro';
    }
    if (this.tipo == 'receitas') {
      this.tarefa.fonte = 'Fogão';
    }
  }
  

}
