import { Component } from '@angular/core';

@Component({
  selector: 'app-usuario-perfil',
  templateUrl: './usuario-perfil.component.html',
  styleUrls: ['./usuario-perfil.component.scss']
})
export class UsuarioPerfilComponent {
  emailParaVerificacao: string = ''; // Armazena o email a ser verificado
  mensagemEmail: string = ''; // Mensagem para exibir ao usuário
  modalVerificacaoVisible: boolean = false; // Controla a visibilidade do modal

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
}
