import { Component } from '@angular/core';
import { Historico } from '../../interfaces/Historico';
import { Tarefa } from '../../interfaces/Tarefa'; // Certifique-se de que esse caminho está correto
import { HistoricoService } from '../../servicos/historico.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-historico',
  templateUrl: './usuario-historico.component.html',
  styleUrls: ['./usuario-historico.component.scss']
})
export class UsuarioHistoricoComponent {
  cadastroForm!: FormGroup;
  usuario: Historico = {
    id: 0,
    data: new Date(),
    usuario: '',
    tarefa: {} as Tarefa, // Certifique-se que a interface Tarefa está sendo usada corretamente
    fonte: ''
  };

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private historicoService: HistoricoService
  ) { }
}
