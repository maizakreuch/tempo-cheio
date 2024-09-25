import { Component } from '@angular/core';

@Component({
  selector: 'app-cronometro-tarefa',
  templateUrl: './cronometro-tarefa.component.html',
  styleUrls: ['./cronometro-tarefa.component.scss']
})
export class CronometroTarefaComponent {
  isPlaying = false; // Estado inicial

  togglePlayPause() {
    this.isPlaying = !this.isPlaying; // Alterna entre true e false
  }
}
