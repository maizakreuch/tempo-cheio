import { Historico } from './Historico'; // Ajuste o caminho conforme a localização do arquivo

export interface Feedback {
  id: number;
  nota: number;
  observacao: string;
  historico: Historico; // Usando a interface 'Historico' como tipo
}
