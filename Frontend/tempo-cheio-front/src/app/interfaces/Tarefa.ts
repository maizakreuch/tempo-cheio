export interface Tarefa {
  id: number;
  quantity: number;
  titulo: string;
  valorHora: number;
  valorMinuto: number;
  valorSegundo: number;
  medidaUnidade: string;
  quantidade: number;
  favorito: boolean;
  tipoTarefa?: string; // ou outro tipo apropriado
  fonte: string;
  fonteDescricao?: string; // Adicione esta linha
}
