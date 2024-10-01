import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FeedbackService } from '../../servicos/feedback.service';
import { Feedback } from '../../interfaces/Feedback';
import { Tarefa } from '../../interfaces/Tarefa';
import { TarefaService } from '../../servicos/tarefa.service';

@Component({
  selector: 'app-avaliar-tarefa',
  templateUrl: './avaliar-tarefa.component.html',
  styleUrls: ['./avaliar-tarefa.component.scss']
})
export class AvaliarTarefaComponent {
  estrelas = new Array(5).fill(0);
  rating: number = 0;
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
    fonte: ''
  };
  feedback: Feedback = {
    id: 0,
    nota: 0,
    observacao: '',
    tarefaFeedback: this.tarefa
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private feedbackService: FeedbackService,
    private tarefaService: TarefaService,
  ) {}

  avaliar(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const starIndex = Number(target.id);
    this.rating = starIndex + 1;
  }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.tarefaService.findById(id).subscribe((retorno: Tarefa) => {
      this.tarefa = retorno;
    });
  }  

  // Função para redirecionar para a tela principal
  avaliarTarefa() {

    this.feedback.nota = this.rating;
    this.feedback.tarefaFeedback = this.tarefa;

    this.feedbackService.add(this.feedback).subscribe(() => {
      this.router.navigate(['/tela-principal']);
    });

  }
  voltarTarefa(){
    this.router.navigate(['/tela-principal'])
  }
}


























