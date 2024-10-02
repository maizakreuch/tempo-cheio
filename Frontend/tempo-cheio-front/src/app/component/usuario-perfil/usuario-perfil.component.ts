import { Component } from '@angular/core';
import { TarefaService } from '../../servicos/tarefa.service';

@Component({
  selector: 'app-usuario-perfil',
  templateUrl: './usuario-perfil.component.html',
  styleUrls: ['./usuario-perfil.component.scss']
})
export class UsuarioPerfilComponent {
  emailParaVerificacao: string = ''; // Armazena o email a ser verificado
  mensagemEmail: string = ''; // Mensagem para exibir ao usuário
  modalVerificacaoVisible: boolean = false; // Controla a visibilidade do modal
  quantTarefasAgua: number = 0; // Quantidade de tarefas de água
  quantTarefasReceitas: number = 0; // Quantidade de tarefas de receitas
  quantTarefasTotal: number = 0; // Quantidade total de tarefas
  tipo: string = ''; // Inicializa com uma string vazia

  constructor(private tarefaService: TarefaService) {}

  ngOnInit() {
    this.carregarTarefas(); // Carrega as tarefas ao iniciar o componente
  }

  carregarTarefas() {
    this.tarefaService.findAll().subscribe(tarefas => {
      console.log(tarefas); // Verifique o que está sendo retornado
  
      this.quantTarefasAgua = tarefas.filter(tarefa => 
        tarefa.tipoTarefa?.trim().toLowerCase() === 'agua').length;
      
      this.quantTarefasReceitas = tarefas.filter(tarefa => 
        tarefa.tipoTarefa?.trim().toLowerCase() === 'receitas').length;
  
      this.quantTarefasTotal = tarefas.length;
    });
  }
  
  
  
  
  compartilhar() {
    const link = 'http://localhost:4200/usuario-login'; // Define o link da página

    // Copia o link para a área de transferência
    navigator.clipboard.writeText(link).then(() => {
      // Exibe uma notificação ou mensagem de sucesso
      alert(`Link copiado: ${link}`);
    }).catch(err => {
      console.error('Erro ao copiar o link: ', err);
    });
  }

  abrirLink() {
    // Abre o link em uma nova aba
    window.open('http://localhost:4200/usuario-login', '_blank');
  }

  mostrarModalVerificacao() {
    this.modalVerificacaoVisible = true; // Mostra o modal de verificação de email
  }

  fecharModalVerificacao() {
    this.modalVerificacaoVisible = false; // Fecha o modal
    this.emailParaVerificacao = ''; // Limpa o email
    this.mensagemEmail = ''; // Limpa a mensagem
  }

  verificarEmail() {
    if (this.emailParaVerificacao) {
      // Aqui você pode implementar a lógica para enviar um email de verificação
      this.mensagemEmail = `Um email de verificação foi enviado para ${this.emailParaVerificacao}.`;
    } else {
      this.mensagemEmail = 'Por favor, digite um email válido.';
    }
  }

  inicializarTarefa(tipo: string): void {
    console.log(`Inicializando tarefa para ${tipo}.`);
  }
}
