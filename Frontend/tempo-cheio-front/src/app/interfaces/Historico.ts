export interface Historico {
    id: number;
    data: Date; // Ou string, dependendo de como você está armazenando
    fonte: string;
    usuarioHistoricoId: number; // ID do usuário
    tarefaHistoricoId: number; // ID da tarefa associada
    titulo: string; // Verifique se essa propriedade existe
  }
  