import { Component } from '@angular/core';
import { Tarefa } from '../../interfaces/Tarefa';
import { TarefaService } from '../../servicos/tarefa.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cronometro-tarefa',
  templateUrl: './cronometro-tarefa.component.html',
  styleUrls: ['./cronometro-tarefa.component.scss']
})
export class CronometroTarefaComponent {
  
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
  hora: number = 1;
  minuto: number = 2;
  segundo: number = 3;

  constructor(
    private tarefaService: TarefaService,
    private route: ActivatedRoute
  ){}

  ngOnInit() {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.tarefaService.findById(id).subscribe(retorno => {
      this.tarefa = retorno;

      this.hora = this.tarefa.valorHora;
      this.minuto = this.tarefa.valorMinuto;
      this.segundo = this.tarefa.valorSegundo;
    });
  }

  iniciarCarregamento() {
    // Captura o valor do input
    const valor = (this.hora*60*60) + (this.minuto*60) + this.segundo;
    const sectionContainer = document.getElementById('container');
    const sectionProgresso = document.getElementById('progresso');
    
    // Define a altura inicial da div e o tempo restante
    let alturaAtual = 0;
    const alturaMaxima =  940;

    // Calcula o incremento de altura por segundo
    const incremento = alturaMaxima / valor;

    // Usa setInterval para aumentar a altura a cada segundo e atualizar a contagem regressiva
    const intervalo = setInterval(() => {
      if (alturaAtual < alturaMaxima) {
        alturaAtual += incremento;
        if (sectionProgresso) {
          sectionProgresso.style.height = `${alturaAtual}px`; // Aumenta a altura da div progressivamente
        }
        this.validarSegundo();

      } else {
        clearInterval(intervalo); // Para o intervalo quando atingir a altura máxima
      }
    }, 1000); // 1 segundo
  }

  validarHora() {
    if(this.minuto == 0 && this.hora > 0){
      this.hora = this.hora - 1;
      this.minuto = 59
    }
  }

  validarMinuto() {
    if(this.segundo == 0 && this.minuto > 0){
      this.minuto = this.minuto - 1;
      this.segundo = 59
    }
    this.validarHora();
  }

  validarSegundo() {
    if(this.segundo > 0){
      this.segundo = this.segundo - 1;
    }
    this.validarMinuto();
  }
}
