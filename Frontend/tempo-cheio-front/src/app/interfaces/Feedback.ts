import { Tarefa } from './Tarefa';

export interface Feedback {
  id: number;
  nota: number;
  observacao: string;
  tarefaFeedback: Tarefa; // Usando a interface 'Historico' como tipo
}
